#!/usr/bin/env bash

cd $2

if [[ $1 == "npm" ]]; then
  npm install
else
 yarn
fi