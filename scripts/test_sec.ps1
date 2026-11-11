$WINDOWS_FILE_TIME_EPOCH = 11644473600
$TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4"

$nowSec = [Math]::Floor([DateTimeOffset]::UtcNow.ToUnixTimeSeconds())
$ticks = [long](($nowSec + $WINDOWS_FILE_TIME_EPOCH) * 10000000)
$roundedTicks = $ticks - ($ticks % 3000000000)
$strToHash = "$($roundedTicks)$($TRUSTED_CLIENT_TOKEN)"

$sha256 = [System.Security.Cryptography.SHA256]::Create()
$hashBytes = $sha256.ComputeHash([System.Text.Encoding]::ASCII.GetBytes($strToHash))
$secMsGec = [BitConverter]::ToString($hashBytes).Replace('-', '').ToUpper()

Write-Host "Sec-MS-GEC: $secMsGec"

$url = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=$TRUSTED_CLIENT_TOKEN&Sec-MS-GEC=$secMsGec&Sec-MS-GEC-Version=1-130.0.2849.68"
Write-Host "Connecting to $url ..."

$ws = New-Object System.Net.WebSockets.ClientWebSocket
$options = $ws.Options

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

try {
    $t = $ws.ConnectAsync((New-Object System.Uri($url)), [System.Threading.CancellationToken]::None)
    $t.Wait(10000)
    Write-Host "WebSocket State: $($ws.State)"
} catch {
    Write-Host "Catch: $_"
    $ex = $_.Exception
    while ($ex) {
        Write-Host "Ex: $($ex.GetType().FullName): $($ex.Message)"
        $ex = $ex.InnerException
    }
}
