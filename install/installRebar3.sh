@echo off
setlocal
set rebarscript=%~f0
escript.exe "%rebarscript:.cmd=%" %*

wget https://s3.amazonaws.com/rebar3/rebar3 && chmod +x rebar3

./rebar3 local install