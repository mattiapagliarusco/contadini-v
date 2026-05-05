@echo off
setlocal

cd /d "%~dp0"

set "NODE_CMD=node"

where node >nul 2>nul
if errorlevel 1 (
  set "BUNDLED_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
  if exist "%BUNDLED_NODE%" (
    set "NODE_CMD=%BUNDLED_NODE%"
  ) else (
    echo Node.js non trovato. Installa Node.js LTS e rilancia questo comando.
    pause
    exit /b 1
  )
)

where tailscale >nul 2>nul
if errorlevel 1 (
  echo Tailscale non trovato.
  echo.
  echo Installa Tailscale da https://tailscale.com/download
  echo Poi fai login e rilancia questo comando.
  echo.
  pause
  exit /b 1
)

echo Avvio server locale Contadini Volanti su http://127.0.0.1:4173 ...
start "Contadini Volanti Server" cmd /k ""%NODE_CMD%" server.mjs"

echo.
echo Pubblicazione privata via Tailscale Serve...
echo Solo i dispositivi autorizzati nel tuo account/team Tailscale potranno aprirlo.
echo.

tailscale serve --bg 4173
tailscale serve status

echo.
echo Se vedi un URL https://...ts.net, aprilo dai dispositivi collegati a Tailscale.
echo Per fermare la condivisione privata usa: ferma-pubblicazione-tailscale.cmd
echo.
pause
