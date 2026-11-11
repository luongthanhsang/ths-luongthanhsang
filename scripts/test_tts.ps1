param(
    [string]$text = "Xin chào các em học sinh thân yêu, Thầy Sáng rất vui khi được đồng hành cùng các em trong tiết học số.",
    [string]$outputPath = "d:\Wed_ThS. Lương Thanh Sáng\assets\audio\test_tts.mp3",
    [string]$voice = "vi-VN-NamMinhNeural"
)

Add-Type -AssemblyName System.Net.Http

$dir = [System.IO.Path]::GetDirectoryName($outputPath)
if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

$ws = New-Object System.Net.WebSockets.ClientWebSocket
$options = $ws.Options

# Reflection workaround to force-add User-Agent and other headers:
$optionsType = $options.GetType()
$field = $optionsType.GetField("_headers", [System.Reflection.BindingFlags]"Instance, NonPublic")
if (-not $field) {
    $field = $optionsType.GetField("m_headers", [System.Reflection.BindingFlags]"Instance, NonPublic")
}

if ($field) {
    $headers = $field.GetValue($options)
    $method = $headers.GetType().GetMethod("AddWithoutValidate", [type[]]@([string], [string]))
    $null = $method.Invoke($headers, @("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0"))
    $null = $method.Invoke($headers, @("Origin", "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold"))
    $null = $method.Invoke($headers, @("Pragma", "no-cache"))
    $null = $method.Invoke($headers, @("Cache-Control", "no-cache"))
}

$endpoint = "wss://speech.platform.bing.com/consumer/speech/synthesize/readahead/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4"
$uri = New-Object System.Uri($endpoint)
$cts = New-Object System.Threading.CancellationTokenSource(20000)

Write-Host "Connecting to Edge TTS WebSocket..."
$connectTask = $ws.ConnectAsync($uri, $cts.Token)
$connectTask.Wait()

if ($ws.State -ne [System.Net.WebSockets.WebSocketState]::Open) {
    Write-Error "Failed to connect to Edge TTS"
    exit 1
}
Write-Host "Connected successfully!"

# 1. Send speech.config
$configJson = '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}'
$configMsg = "Content-Type:application/json; charset=utf-8`r`nPath:speech.config`r`n`r`n" + $configJson
$configBytes = [System.Text.Encoding]::UTF8.GetBytes($configMsg)
$sendConfigTask = $ws.SendAsync((New-Object System.ArraySegment[byte] -ArgumentList @(,$configBytes)), [System.Net.WebSockets.WebSocketMessageType]::Text, $true, [System.Threading.CancellationToken]::None)
$sendConfigTask.Wait()

# 2. Send SSML request
$reqId = [System.Guid]::NewGuid().ToString("N")
$dateStr = [System.DateTime]::UtcNow.ToString("r")
$escapedText = [System.Security.SecurityElement]::Escape($text)
$ssml = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='vi-VN'><voice name='$voice'><prosody pitch='+0Hz' rate='+0%' volume='+0%'>$escapedText</prosody></voice></speak>"
$ssmlMsg = "X-RequestId:$reqId`r`nContent-Type:application/ssml+xml`r`nX-Timestamp:$dateStr`r`nPath:ssml`r`n`r`n" + $ssml
$ssmlBytes = [System.Text.Encoding]::UTF8.GetBytes($ssmlMsg)
$sendSsmlTask = $ws.SendAsync((New-Object System.ArraySegment[byte] -ArgumentList @(,$ssmlBytes)), [System.Net.WebSockets.WebSocketMessageType]::Text, $true, [System.Threading.CancellationToken]::None)
$sendSsmlTask.Wait()

Write-Host "Receiving audio stream..."
$audioStream = New-Object System.IO.MemoryStream
$buffer = New-Object byte[] 65536
$done = $false

while (-not $done -and $ws.State -eq [System.Net.WebSockets.WebSocketState]::Open) {
    $segment = New-Object System.ArraySegment[byte] -ArgumentList @(,$buffer)
    $receiveTask = $ws.ReceiveAsync($segment, [System.Threading.CancellationToken]::None)
    $receiveTask.Wait()
    $result = $receiveTask.Result
    
    if ($result.MessageType -eq [System.Net.WebSockets.WebSocketMessageType]::Close) {
        break
    }
    
    if ($result.MessageType -eq [System.Net.WebSockets.WebSocketMessageType]::Binary) {
        $headerLen = ($buffer[0] -shl 8) -bor $buffer[1]
        $audioOffset = $headerLen + 2
        $audioLen = $result.Count - $audioOffset
        if ($audioLen -gt 0) {
            $audioStream.Write($buffer, $audioOffset, $audioLen)
        }
    } elseif ($result.MessageType -eq [System.Net.WebSockets.WebSocketMessageType]::Text) {
        $textMsg = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $result.Count)
        if ($textMsg -match "Path:turn.end") {
            $done = $true
        }
    }
}

try {
    $ws.CloseAsync([System.Net.WebSockets.WebSocketCloseStatus]::NormalClosure, "Done", [System.Threading.CancellationToken]::None).Wait()
} catch {}

[System.IO.File]::WriteAllBytes($outputPath, $audioStream.ToArray())
Write-Host "SUCCESS! Generated MP3 ($($audioStream.Length) bytes) at $outputPath"
