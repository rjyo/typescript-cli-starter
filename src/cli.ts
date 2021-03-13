#!/usr/bin/env node
import arg from 'arg'

// check more at https://github.com/vercel/arg
const args = arg({
  // Types
  '--help': Boolean,
  '--version': Boolean,
  '--verbose': arg.COUNT, // Counts the number of times --verbose is passed
  '--port': Number, // --port <number> or --port=<number>
  '--url': String, // --url <string> or --url=<string>
  '--name': String, // --name <string> or --name=<string>
  '--tag': [String], // --tag <string> or --tag=<string>

  // Aliases
  '-v': '--verbose',
  '-n': '--name', // -n <string>; result is stored in --name
  '--label': '--name', // --label <string> or --label=<string>;
  //     result is stored in --name
})
export type Argv = typeof args

import urlJob from './jobs/url_fetch'
import helloJob from './jobs/hello'

async function main() {
  if (args._.length > 0) {
    if (args._[0] === 'fetch') {
      await urlJob(args)
    } else if (args._[0] === 'hello') {
      await helloJob(args)
    }
  }
}

main()
