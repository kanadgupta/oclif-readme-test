import type {HelpOptions} from '@oclif/core/interfaces'

import {type Config, Help} from '@oclif/core'

export default class MyHelpClass extends Help {
  constructor(config: Config) {
    const opts: Partial<HelpOptions> = {
      hideAliasesFromRoot: true,
    }
    super(config, opts)
  }
}
