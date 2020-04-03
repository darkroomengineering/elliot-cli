#!/usr/bin/env bash

cd elliot-serverless-ecommerce

ELLIOT_STORE_FRONT_ID=$1
ELLIOT_STORE_FRONT_NAME=$2
ELLIOT_DOMAIN_ID=$3
ELLIOT_API_KEY=$4

cp .env.development.template .env.development

sed -i '' -e "s/ELLIOT_ENV_VARIABLES=[^,]*/ELLIOT_ENV_VARIABLES=$ELLIOT_DOMAIN_ID|$ELLIOT_STORE_FRONT_ID|$ELLIOT_STORE_FRONT_NAME|$ELLIOT_API_KEY/" .env.development

