elliot-cli
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/elliot-cli.svg)](https://npmjs.org/package/elliot-cli)
[![Downloads/week](https://img.shields.io/npm/dw/elliot-cli.svg)](https://npmjs.org/package/elliot-cli)
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
elliot-cli/0.0.0 darwin-x64 node-v13.5.0
$ elliot --help [COMMAND]
USAGE
  $ elliot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`elliot deploy [FILE]`](#elliot-deploy-file)
* [`elliot hello [FILE]`](#elliot-hello-file)
* [`elliot help [COMMAND]`](#elliot-help-command)

## `elliot deploy [FILE]`

describe the command here

```
USAGE
  $ elliot deploy [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/deploy.ts](https://github.com/helloiamelliot/elliot-cli/blob/v0.0.0/src/commands/deploy.ts)_

## `elliot hello [FILE]`

describe the command here

```
USAGE
  $ elliot hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ elliot hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/helloiamelliot/elliot-cli/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
