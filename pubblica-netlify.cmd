@echo off
setlocal

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo npm non trovato. Installa Node.js LTS e riapri questa finestra.
  pause
  exit /b 1
)

call "%~dp0prepara-deploy-statico.cmd" nopause

echo.
echo ATTENZIONE: Netlify statico non supporta il login server-side ne dati condivisi.
echo Per la versione con accesso e archivio condiviso usa Render.
echo.
pause

echo.
echo Pubblicazione pubblica su Netlify...
echo Al primo utilizzo verra richiesto il login Netlify.
echo.

npx netlify-cli deploy --prod --dir=dist

echo.
pause
