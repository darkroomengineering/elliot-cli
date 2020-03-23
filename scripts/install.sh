#!/usr/bin/env bash

cd elliot-serverless-ecommerce

if [[ $1 == "npm" ]]; then
  npm install
else
 yarn
fi