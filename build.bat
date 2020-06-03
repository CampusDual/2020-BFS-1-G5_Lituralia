set publicUrl=%~dp0frontend\src\main\resources\public
echo %publicUrl%
cd src/main/resources/webapp
if not exist node_modules (call npm install) else (echo node_modules already exists.)
call npm run production-aot
if not exist %publicUrl% (md %publicUrl%) else (echo public folder already exists.)
ren "dist" "app" & move "app" "%publicUrl%"