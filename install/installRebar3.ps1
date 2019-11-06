# @echo off
$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest
Write-Output "Installing Rebar 3 .."
Set-Variable temp $env:TEMP\rebar3
$testPath = Test-Path $temp -PathType Any

if ($testPath -eq $True) { 
    echo "deleting old folder: $temp"
    $Directory = Get-Item $temp
    $Directory.Delete($temp)
}

# Building
git clone https://github.com/rebar/rebar3.git $temp
Write-Output "Building.."
cd $temp
$command = $temp + "\bootstrap.bat"
Invoke-Expression $command

# Copy Rebar3
$rebar3Path = $temp + "\rebar3"
echo "Copying files.."

$rebar3CmdPath = $rebar3Path + ".cmd"

$currentWorkingDir = (Get-Location).path

Copy-Item $rebar3Path $currentWorkingDir -ErrorVariable capturedErrors -ErrorAction SilentlyContinue
Copy-Item $rebar3CmdPath $currentWorkingDir -ErrorVariable capturedErrors -ErrorAction SilentlyContinue
cd $currentWorkingDir

# NOT AVAILABLE ON WINDOWS below
# $command = Join-Path (Get-Location).path "rebar3 local install"
# echo $command

$command = Join-Path (Get-Location).path "rebar3 --version"
Invoke-Expression $command

echo "done. "
