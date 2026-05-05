@echo off
setlocal

cd /d "%~dp0"

if not exist "dist" mkdir "dist"

copy /Y "index.html" "dist\index.html" >nul
copy /Y "styles.css" "dist\styles.css" >nul
copy /Y "app.js" "dist\app.js" >nul

echo Cartella dist pronta.
echo Puoi caricare la cartella dist su Netlify Drop oppure su un hosting statico.
echo ATTENZIONE: il deploy statico non include login server-side ne dati condivisi.
echo Per login e archivio condiviso usa Render con server.mjs.
echo.
echo File inclusi:
dir /B "dist"
echo.

if /I "%~1"=="nopause" exit /b 0
pause
