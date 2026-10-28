@echo off
rem Starts PCTE Campus Radio: MySQL check, backend (port 5000), frontend (port 5173), then opens Chrome.
cd /d "%~dp0"

sc query MySQL80 | find "RUNNING" >nul
if errorlevel 1 (
  echo Starting MySQL...
  net start MySQL80 || echo [!] Could not start MySQL. Run this file as Administrator or start MySQL80 manually.
)

if not exist "server\node_modules" (
  echo Installing backend packages...
  pushd server & call npm install & popd
)
if not exist "client\node_modules" (
  echo Installing frontend packages...
  pushd client & call npm install & popd
)

start "PCTE Backend" /D "%~dp0server" cmd /k node server.js
start "PCTE Frontend" /D "%~dp0client" cmd /k npm run dev -- --port 5173 --strictPort

echo Waiting for the site to come up...
:wait
curl -s -o nul http://localhost:5173 || (timeout /t 1 /nobreak >nul & goto wait)

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" http://localhost:5173
) else (
  start "" http://localhost:5173
)
echo PCTE Campus Radio is running. Close the Backend/Frontend windows to stop it.
