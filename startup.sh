#!/bin/bash

cd /var/www/clients/client1/web1/home/xfonelabsadminbuild/runner/EnablingEnvironmentAssessmentTool

node --version
npm --version

npm install

npx pkg index.js -t node14-linux-x64,node14-win-x64,node14-macos-x64 --out-path dist/

./dist/index-linux