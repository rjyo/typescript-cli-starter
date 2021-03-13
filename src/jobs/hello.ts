import { Argv } from '../cli'

export default async (argv: Argv) => {
  console.log('Hi there', argv['--name'])
}
