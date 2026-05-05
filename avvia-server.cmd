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
    echo Node.js non trovato.
    echo.
    echo Soluzione consigliata:
    echo 1. Installa Node.js LTS da https://nodejs.org/
    echo 2. Chiudi e riapri questa finestra
    echo 3. Rilancia avvia-server.cmd
    echo.
    pause
    exit /b 1
  )
)

echo Avvio server Contadini Volanti...
echo URL: http://127.0.0.1:4173
echo.

"%NODE_CMD%" server.mjs

echo.
echo Server chiuso.
pause
