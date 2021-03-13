import hello from '../src/jobs/hello'

describe('test hello', () => {
  it('no params', () => {
    hello({ _: [] })
  })
})
