#!/usr/bin/env bash

cd zeit-checkout-boilerplate

if [[ $1 == "npm" ]]; then
  npm install
else
 yarn
fi