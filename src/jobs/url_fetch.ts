import { Argv } from '../cli'
import fetch from 'isomorphic-fetch'

export default async (argv: Argv) => {
  const url = argv['--url']
  if (url) {
    const rv = await fetch(url)
    if (rv.ok) {
      console.log(await rv.text())
    } else {
      console.error('failed to get', url)
    }
  }
}
