#!/usr/bin/env bash

cd $5

remove_git_dir() {
  remove_dir=(
  .github
  .now
  public
  CODEOWNERS.md
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
  README.md
  SECURITY.md
  elliot-zeit.jpg
)

  for file in ${remove_dir[@]}
  do
    rm -rf $file
  done
}

add_env_vars() {
  ELLIOT_STORE_FRONT_ID=$1
  ELLIOT_STORE_FRONT_NAME=$2
  ELLIOT_DOMAIN_ID=$3
  ELLIOT_API_KEY=$4

  cp .env.development.template .env.development

  sed -i '' -e "s/ELLIOT_ENV_VARIABLES=[^,]*/ELLIOT_ENV_VARIABLES=$ELLIOT_DOMAIN_ID|$ELLIOT_STORE_FRONT_ID|$ELLIOT_STORE_FRONT_NAME|$ELLIOT_API_KEY/" .env.development
}

main() {
  remove_git_dir
  add_env_vars
}

main

