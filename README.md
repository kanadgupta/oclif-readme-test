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
[1mUSAGE[22m
  $ oclif-readme-test hello PERSON -f <value>

[1mARGUMENTS[22m
  PERSON  Person to say hello to

[1mFLAGS[22m
  -f, --from=[4m<value>[24m  (required) Who is saying hello

[1mDESCRIPTION[22m
  Say hello

[1mEXAMPLES[22m
  $ oclif-readme-test hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/kanadgupta/oclif-readme-test/blob/v0.0.0/src/commands/hello/index.ts)_

## `oclif-readme-test hello world`

Say hello world

```
[1mUSAGE[22m
  $ oclif-readme-test hello world

[1mDESCRIPTION[22m
  Say hello world

[1mEXAMPLES[22m
  $ oclif-readme-test hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/kanadgupta/oclif-readme-test/blob/v0.0.0/src/commands/hello/world.ts)_

## `oclif-readme-test help [COMMAND]`

Display help for oclif-readme-test.

```
[1mUSAGE[22m
  $ oclif-readme-test help [COMMAND...] [-n]

[1mARGUMENTS[22m
  COMMAND...  Command to show help for.

[1mFLAGS[22m
  -n, --nested-commands  Include all nested commands in the output.

[1mDESCRIPTION[22m
  Display help for oclif-readme-test.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.17/src/commands/help.ts)_

## `oclif-readme-test plugins`

List installed plugins.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins [--json] [--core]

[1mFLAGS[22m
  --core  Show core plugins.

[1mGLOBAL FLAGS[22m
  --json  Format output as json.

[1mDESCRIPTION[22m
  List installed plugins.

[1mEXAMPLES[22m
  $ oclif-readme-test plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/index.ts)_

## `oclif-readme-test plugins add PLUGIN`

Installs a plugin into oclif-readme-test.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

[1mARGUMENTS[22m
  PLUGIN...  Plugin to install.

[1mFLAGS[22m
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

[1mGLOBAL FLAGS[22m
  --json  Format output as json.

[1mDESCRIPTION[22m
  Installs a plugin into oclif-readme-test.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OCLIF_README_TEST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OCLIF_README_TEST_NPM_REGISTRY environment variable to set the npm registry.

[1mALIASES[22m
  $ oclif-readme-test plugins add

[1mEXAMPLES[22m
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
[1mUSAGE[22m
  $ oclif-readme-test plugins inspect PLUGIN...

[1mARGUMENTS[22m
  PLUGIN...  [default: .] Plugin to inspect.

[1mFLAGS[22m
  -h, --help     Show CLI help.
  -v, --verbose

[1mGLOBAL FLAGS[22m
  --json  Format output as json.

[1mDESCRIPTION[22m
  Displays installation properties of a plugin.

[1mEXAMPLES[22m
  $ oclif-readme-test plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/inspect.ts)_

## `oclif-readme-test plugins install PLUGIN`

Installs a plugin into oclif-readme-test.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

[1mARGUMENTS[22m
  PLUGIN...  Plugin to install.

[1mFLAGS[22m
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

[1mGLOBAL FLAGS[22m
  --json  Format output as json.

[1mDESCRIPTION[22m
  Installs a plugin into oclif-readme-test.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OCLIF_README_TEST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OCLIF_README_TEST_NPM_REGISTRY environment variable to set the npm registry.

[1mALIASES[22m
  $ oclif-readme-test plugins add

[1mEXAMPLES[22m
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
[1mUSAGE[22m
  $ oclif-readme-test plugins link PATH [-h] [--install] [-v]

[1mARGUMENTS[22m
  PATH  [default: .] path to plugin

[1mFLAGS[22m
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

[1mDESCRIPTION[22m
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command will override the user-installed or core plugin implementation. This is useful for development work.


[1mEXAMPLES[22m
  $ oclif-readme-test plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/link.ts)_

## `oclif-readme-test plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins remove [PLUGIN...] [-h] [-v]

[1mARGUMENTS[22m
  PLUGIN...  plugin to uninstall

[1mFLAGS[22m
  -h, --help     Show CLI help.
  -v, --verbose

[1mDESCRIPTION[22m
  Removes a plugin from the CLI.

[1mALIASES[22m
  $ oclif-readme-test plugins unlink
  $ oclif-readme-test plugins remove

[1mEXAMPLES[22m
  $ oclif-readme-test plugins remove myplugin
```

## `oclif-readme-test plugins reset`

Remove all user-installed and linked plugins.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins reset [--hard] [--reinstall]

[1mFLAGS[22m
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/reset.ts)_

## `oclif-readme-test plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins uninstall [PLUGIN...] [-h] [-v]

[1mARGUMENTS[22m
  PLUGIN...  plugin to uninstall

[1mFLAGS[22m
  -h, --help     Show CLI help.
  -v, --verbose

[1mDESCRIPTION[22m
  Removes a plugin from the CLI.

[1mALIASES[22m
  $ oclif-readme-test plugins unlink
  $ oclif-readme-test plugins remove

[1mEXAMPLES[22m
  $ oclif-readme-test plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/uninstall.ts)_

## `oclif-readme-test plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins unlink [PLUGIN...] [-h] [-v]

[1mARGUMENTS[22m
  PLUGIN...  plugin to uninstall

[1mFLAGS[22m
  -h, --help     Show CLI help.
  -v, --verbose

[1mDESCRIPTION[22m
  Removes a plugin from the CLI.

[1mALIASES[22m
  $ oclif-readme-test plugins unlink
  $ oclif-readme-test plugins remove

[1mEXAMPLES[22m
  $ oclif-readme-test plugins unlink myplugin
```

## `oclif-readme-test plugins update`

Update installed plugins.

```
[1mUSAGE[22m
  $ oclif-readme-test plugins update [-h] [-v]

[1mFLAGS[22m
  -h, --help     Show CLI help.
  -v, --verbose

[1mDESCRIPTION[22m
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/update.ts)_
<!-- commandsstop -->
