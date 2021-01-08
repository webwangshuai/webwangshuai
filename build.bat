@echo off
start cmd /k "npm run build && xcopy E:\project\webwangshuai\public E:\project\webwangshuai.github.io /s /f /h"