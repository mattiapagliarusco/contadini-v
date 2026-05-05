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

echo ATTENZIONE: stai pubblicando il gestionale su internet.
echo Chiunque abbia il link Tailscale Funnel potra aprirlo.
echo Non inserire dati sensibili in questa versione demo.
echo.
pause

echo Avvio server locale Contadini Volanti su http://127.0.0.1:4173 ...
start "Contadini Volanti Server" cmd /k ""%NODE_CMD%" server.mjs"

echo.
echo Pubblicazione pubblica via Tailscale Funnel...
echo Se Tailscale chiede approvazione, segui il link che compare nella finestra.
echo.

tailscale funnel --bg 4173
tailscale funnel status

echo.
echo Copia l'URL https://...ts.net mostrato qui sopra: quello e il link pubblico.
echo Per fermare la pubblicazione usa: ferma-pubblicazione-online.cmd
echo.
pause
