#!/usr/bin/env bash

cd elliot-serverless-ecommerce

ELLIOT_STORE_FRONT_ID=$1
ELLIOT_STORE_FRONT_NAME=$2
ELLIOT_DOMAIN_ID=$3
ELLIOT_API_KEY=$4

if [[ $5 == 'staging' ]]; then
  cp .env.development.template .env.development

  sed -i '' -e "s/ELLIOT_STORE_FRONT_ID=[^,]*/ELLIOT_STORE_FRONT_ID=$ELLIOT_STORE_FRONT_ID/" .env.development
  sed -i '' -e "s/ELLIOT_STORE_FRONT_NAME=[^,]*/ELLIOT_STORE_FRONT_NAME=$ELLIOT_STORE_FRONT_NAME/" .env.development
  sed -i '' -e "s/ELLIOT_DOMAIN_ID=[^,]*/ELLIOT_DOMAIN_ID=$ELLIOT_DOMAIN_ID/" .env.development
  sed -i '' -e "s/ELLIOT_API_KEY=[^,]*/ELLIOT_API_KEY=$ELLIOT_API_KEY/" .env.development
else
  cp .env.production.template .env.production
  sed -i '' -e "s/ELLIOT_STORE_FRONT_ID=[^,]*/ELLIOT_STORE_FRONT_ID=$ELLIOT_STORE_FRONT_ID/" .env.production
  sed -i '' -e "s/ELLIOT_STORE_FRONT_NAME=[^,]*/ELLIOT_STORE_FRONT_NAME=$ELLIOT_STORE_FRONT_NAME/" .env.production
  sed -i '' -e "s/ELLIOT_DOMAIN_ID=[^,]*/ELLIOT_DOMAIN_ID=$ELLIOT_DOMAIN_ID/" .env.production
  sed -i '' -e "s/ELLIOT_API_KEY=[^,]*/ELLIOT_API_KEY=$ELLIOT_API_KEY/" .env.production
fi

