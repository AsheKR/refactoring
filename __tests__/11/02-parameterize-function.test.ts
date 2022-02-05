import {baseCharge} from '../../src/11/02-parameterize-function'
import {expect, describe, it} from '@jest/globals'

describe('Test 11.02. Parameterize Function', () => {
  it('baseCharge', async () => {
    expect(baseCharge(250)).toEqual(11.5)
  })
})
