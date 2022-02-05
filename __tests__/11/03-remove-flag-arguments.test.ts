import {clientA, clientB} from '../../src/11/03-remove-flag-argument'
import {expect, describe, it} from '@jest/globals'

describe('Test 11.02. Remove Flag Arguments', () => {
  it('clientA', async () => {
    expect(clientA()).toEqual(2)
  })
  it('clientB', async () => {
    expect(clientB()).toEqual(4)
  })
})
