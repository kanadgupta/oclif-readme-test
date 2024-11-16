oclif-readme-test
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-readme-test.svg)](https://npmjs.org/package/oclif-readme-test)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-readme-test.svg)](https://npmjs.org/package/oclif-readme-test)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-readme-test
$ oclif-readme-test COMMAND
running command...
$ oclif-readme-test (--version)
oclif-readme-test/0.0.0 darwin-arm64 node-v20.18.0
$ oclif-readme-test --help [COMMAND]
USAGE
  $ oclif-readme-test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-readme-test hello PERSON`](#oclif-readme-test-hello-person)
* [`oclif-readme-test hello world`](#oclif-readme-test-hello-world)
* [`oclif-readme-test help [COMMAND]`](#oclif-readme-test-help-command)
* [`oclif-readme-test plugins`](#oclif-readme-test-plugins)
* [`oclif-readme-test plugins add PLUGIN`](#oclif-readme-test-plugins-add-plugin)
* [`oclif-readme-test plugins:inspect PLUGIN...`](#oclif-readme-test-pluginsinspect-plugin)
* [`oclif-readme-test plugins install PLUGIN`](#oclif-readme-test-plugins-install-plugin)
* [`oclif-readme-test plugins link PATH`](#oclif-readme-test-plugins-link-path)
* [`oclif-readme-test plugins remove [PLUGIN]`](#oclif-readme-test-plugins-remove-plugin)
* [`oclif-readme-test plugins reset`](#oclif-readme-test-plugins-reset)
* [`oclif-readme-test plugins uninstall [PLUGIN]`](#oclif-readme-test-plugins-uninstall-plugin)
* [`oclif-readme-test plugins unlink [PLUGIN]`](#oclif-readme-test-plugins-unlink-plugin)
* [`oclif-readme-test plugins update`](#oclif-readme-test-plugins-update)

## `oclif-readme-test hello PERSON`

Say hello

```
USAGE
  $ oclif-readme-test hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oclif-readme-test hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/kanadgupta/oclif-readme-test/blob/v0.0.0/src/commands/hello/index.ts)_

## `oclif-readme-test hello world`

Say hello world

```
USAGE
  $ oclif-readme-test hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oclif-readme-test hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/kanadgupta/oclif-readme-test/blob/v0.0.0/src/commands/hello/world.ts)_

## `oclif-readme-test help [COMMAND]`

Display help for oclif-readme-test.

```
USAGE
  $ oclif-readme-test help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif-readme-test.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.17/src/commands/help.ts)_

## `oclif-readme-test plugins`

List installed plugins.

```
USAGE
  $ oclif-readme-test plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclif-readme-test plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/index.ts)_

## `oclif-readme-test plugins add PLUGIN`

Installs a plugin into oclif-readme-test.

```
USAGE
  $ oclif-readme-test plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into oclif-readme-test.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OCLIF_README_TEST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OCLIF_README_TEST_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ oclif-readme-test plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ oclif-readme-test plugins add myplugin

  Install a plugin from a github url.

    $ oclif-readme-test plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ oclif-readme-test plugins add someuser/someplugin
```

## `oclif-readme-test plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclif-readme-test plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclif-readme-test plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/inspect.ts)_

## `oclif-readme-test plugins install PLUGIN`

Installs a plugin into oclif-readme-test.

```
USAGE
  $ oclif-readme-test plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into oclif-readme-test.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OCLIF_README_TEST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OCLIF_README_TEST_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ oclif-readme-test plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ oclif-readme-test plugins install myplugin

  Install a plugin from a github url.

    $ oclif-readme-test plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ oclif-readme-test plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/install.ts)_

## `oclif-readme-test plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ oclif-readme-test plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ oclif-readme-test plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/link.ts)_

## `oclif-readme-test plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-readme-test plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-readme-test plugins unlink
  $ oclif-readme-test plugins remove

EXAMPLES
  $ oclif-readme-test plugins remove myplugin
```

## `oclif-readme-test plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ oclif-readme-test plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/reset.ts)_

## `oclif-readme-test plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-readme-test plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-readme-test plugins unlink
  $ oclif-readme-test plugins remove

EXAMPLES
  $ oclif-readme-test plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/uninstall.ts)_

## `oclif-readme-test plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-readme-test plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-readme-test plugins unlink
  $ oclif-readme-test plugins remove

EXAMPLES
  $ oclif-readme-test plugins unlink myplugin
```

## `oclif-readme-test plugins update`

Update installed plugins.

```
USAGE
  $ oclif-readme-test plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/update.ts)_
<!-- commandsstop -->
