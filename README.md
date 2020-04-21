helloiamelliot-cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/elliot-cli.svg)](https://npmjs.org/package/helloiamelliot-cli)
[![Downloads/week](https://img.shields.io/npm/dw/elliot-cli.svg)](https://npmjs.org/package/helloiamelliot-cli)
[![License](https://img.shields.io/npm/l/elliot-cli.svg)](https://github.com/helloiamelliot/elliot-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g elliot-cli
$ elliot COMMAND
running command...
$ elliot (-v|--version|version)
elliot-cli/1.1.0 darwin-x64 node-v13.5.0
$ elliot --help [COMMAND]
USAGE
  $ elliot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`elliot deploy [DIRECTORY]`](#elliot-deploy-directory)
* [`elliot help [COMMAND]`](#elliot-help-command)
* [`elliot list`](#elliot-list)
* [`elliot login`](#elliot-login)
* [`elliot logout`](#elliot-logout)

## `elliot deploy [DIRECTORY]`

Deploy storefront to ZEIT

```
USAGE
  $ elliot deploy [DIRECTORY]

OPTIONS
  -e, --env=staging|prod  [default: prod] environment to use
```

_See code: [src/commands/deploy.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.1.0/src/commands/deploy.ts)_

## `elliot help [COMMAND]`

display help for elliot

```
USAGE
  $ elliot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `elliot list`

List all domains or storefronts within a domain

```
USAGE
  $ elliot list

OPTIONS
  -d, --domain_id=domain_id  Pass in domain id to list all storefronts with the domain
  -h, --help                 show CLI help
  -s, --storefront           List all storefronts in a domain
```

_See code: [src/commands/list.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.1.0/src/commands/list.ts)_

## `elliot login`

Authenticate with elliot api

```
USAGE
  $ elliot login

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/login.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.1.0/src/commands/login.ts)_

## `elliot logout`

Logout from your account

```
USAGE
  $ elliot logout

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/logout.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.1.0/src/commands/logout.ts)_
<!-- commandsstop -->
* [`elliot deploy`](#elliot-deploy)
* [`elliot help [COMMAND]`](#elliot-help-command)
* [`elliot list`](#elliot-list)
* [`elliot login`](#elliot-login)
* [`elliot logout`](#elliot-logout)
* [`elliot new [FILE]`](#elliot-new-file)

## `elliot deploy`

Deploy storefront to ZEIT

```
USAGE
  $ elliot deploy

OPTIONS
  -e, --env=staging|prod  [default: prod] environment to use
```

_See code: [src/commands/deploy.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.0.3/src/commands/deploy.ts)_

## `elliot help [COMMAND]`

display help for elliot

```
USAGE
  $ elliot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `elliot list`

List all domains or storefronts within a domain

```
USAGE
  $ elliot list

OPTIONS
  -d, --domain_id=domain_id  Pass in domain id to list all storefronts with the domain
  -h, --help                 show CLI help
  -s, --storefront           List all storefronts in a domain
```

_See code: [src/commands/list.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.0.3/src/commands/list.ts)_

## `elliot login`

Authenticate with elliot api

```
USAGE
  $ elliot login

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/login.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.0.3/src/commands/login.ts)_

## `elliot logout`

Logout from your account

```
USAGE
  $ elliot logout

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/logout.ts](https://github.com/helloiamelliot/elliot-cli/blob/v1.0.3/src/commands/logout.ts)_
