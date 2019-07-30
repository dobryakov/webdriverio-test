#!/bin/sh

./node_modules/.bin/wdio wdio.conf.js
cp -r ./allure-report/history ./allure-results
./node_modules/allure-commandline/bin/allure generate --clean ./allure-results/
# ./node_modules/allure-commandline/bin/allure open
