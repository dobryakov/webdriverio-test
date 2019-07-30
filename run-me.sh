#!/bin/sh

./node_modules/.bin/wdio wdio.conf.js
./node_modules/allure-commandline/bin/allure generate ./allure-results/
