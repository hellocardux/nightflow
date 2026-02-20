@echo off
setlocal
cd /d "%~dp0"

set "IN=assets\source\roles-board.png"

if not exist "%IN%" (
  echo [ERRORE] File non trovato: %IN%
  echo Salva l'immagine allegata in:
  echo   assets\source\roles-board.png
  echo e rilancia questo script.
  pause
  exit /b 1
)

where powershell >nul 2>nul
if errorlevel 1 (
  echo [ERRORE] PowerShell non disponibile.
  pause
  exit /b 1
)

powershell -ExecutionPolicy Bypass -File ".\scripts\extract-role-icons.ps1" -InputImage ".\assets\source\roles-board.png" -OutDir ".\assets\roles"
if errorlevel 1 (
  echo [ERRORE] Estrazione fallita.
  pause
  exit /b 1
)

echo Estrazione completata.
echo Ora fai refresh della web app.
pause
