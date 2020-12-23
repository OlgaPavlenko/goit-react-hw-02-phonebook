@echo off
color 02

cls

for %%I in (.) do set BackupName=%%~nxI

del /s /q ..\%BackupName%.zip

timeout /nobreak /t 1

tar --exclude="*.bat" --exclude="./node_modules" -cf ..\%BackupName%.zip *
