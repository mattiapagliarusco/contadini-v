@echo off
setlocal

where tailscale >nul 2>nul
if errorlevel 1 (
  echo Tailscale non trovato.
  pause
  exit /b 1
)

echo Rimozione condivisione privata Tailscale Serve...
tailscale serve reset

echo.
echo Condivisione privata fermata.
echo Se la finestra del server Node e ancora aperta, chiudila manualmente.
pause
