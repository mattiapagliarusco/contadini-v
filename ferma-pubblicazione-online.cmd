@echo off
setlocal

where tailscale >nul 2>nul
if errorlevel 1 (
  echo Tailscale non trovato.
  pause
  exit /b 1
)

echo Rimozione pubblicazione pubblica Tailscale Funnel...
tailscale funnel reset

echo.
echo Pubblicazione pubblica fermata.
echo Se la finestra del server Node e ancora aperta, chiudila manualmente.
pause
