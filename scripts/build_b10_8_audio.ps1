$ErrorActionPreference = "Stop"

# 1. Setup Python embed if needed
if (-not (Test-Path "scripts\py\python.exe")) {
    Write-Host "Setting up Python portable environment..."
    $url = "https://www.python.org/ftp/python/3.11.9/python-3.11.9-embed-amd64.zip"
    $dest = "scripts\py_embed.zip"
    $wc = New-Object System.Net.WebClient
    $wc.DownloadFile($url, $dest)
    Expand-Archive -Path $dest -DestinationPath "scripts\py" -Force
    Remove-Item $dest -Force -ErrorAction SilentlyContinue

    # Enable site-packages
    $pthFile = "scripts\py\python311._pth"
    $pthContent = Get-Content $pthFile
    $pthContent = $pthContent -replace "#import site", "import site"
    Set-Content -Path $pthFile -Value $pthContent

    # Get pip & install edge-tts
    $pipUrl = "https://bootstrap.pypa.io/get-pip.py"
    $getPip = "scripts\get-pip.py"
    $wc.DownloadFile($pipUrl, $getPip)
    & "scripts\py\python.exe" $getPip --no-warn-script-location
    & "scripts\py\python.exe" -m pip install edge-tts --no-warn-script-location
    Remove-Item $getPip -Force -ErrorAction SilentlyContinue
    Write-Host "Python & Edge TTS ready!"
}

# 2. Run Python script to generate all 10 audio files
& "scripts\py\python.exe" "scripts\generate_b10_8_audio.py"

