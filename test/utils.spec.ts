import * as utils from '../src/utils'

describe('utils.add', () => {
  it('1 + 2 = 3', () => {
    // arrange
    const n1 = 1
    const n2 = 2

    // action
    const r = utils.add(n1, n2)

    // assert
    expect(r).toEqual(3)
  })
})
