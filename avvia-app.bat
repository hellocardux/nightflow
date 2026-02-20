@echo off
setlocal
cd /d "%~dp0"

set PORT=5173

where py >nul 2>nul
if %errorlevel%==0 (
  set "RUNNER=py -m http.server %PORT%"
  goto :start
)

where python >nul 2>nul
if %errorlevel%==0 (
  set "RUNNER=python -m http.server %PORT%"
  goto :start
)

echo [ERRORE] Python non trovato nel PATH.
echo Installa Python oppure avvia con un server statico equivalente.
echo.
pause
exit /b 1

:start
echo Avvio server su http://localhost:%PORT%
echo Premi CTRL+C per fermarlo.
start "" "http://localhost:%PORT%"
%RUNNER%

