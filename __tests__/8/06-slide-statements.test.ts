import {clientA} from '../../src/8/06-slide-statements'
import {expect, describe, it} from '@jest/globals'

describe('Test 08.06. Side Statements', () => {
  it('clientA', async () => {
    expect(clientA()).toEqual(5005)
  })
})
