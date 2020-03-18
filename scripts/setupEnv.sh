#!/usr/bin/env bash

cd zeit-checkout-boilerplate

cp .env.development.template .env.development


ELLIOT_STORE_FRONT_ID=$1
ELLIOT_STORE_FRONT_NAME=$2
ELLIOT_DOMAIN_ID=$3
ELLIOT_API_KEY=$4

sed -i '' -e "s/ELLIOT_STORE_FRONT_ID=[^,]*/ELLIOT_STORE_FRONT_ID=$ELLIOT_STORE_FRONT_ID/" .env.development
sed -i '' -e "s/ELLIOT_STORE_FRONT_NAME=[^,]*/ELLIOT_STORE_FRONT_NAME=$ELLIOT_STORE_FRONT_NAME/" .env.development
sed -i '' -e "s/ELLIOT_DOMAIN_ID=[^,]*/ELLIOT_DOMAIN_ID=$ELLIOT_DOMAIN_ID/" .env.development
sed -i '' -e "s/ELLIOT_API_KEY=[^,]*/ELLIOT_API_KEY=$ELLIOT_API_KEY/" .env.development

