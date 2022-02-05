import {clientA} from '../../src/7/06-inline-class'
import {expect, describe, it} from '@jest/globals'

describe('Test 07.06. Inline Class', () => {
  it('Shipment.display', async () => {
    expect(clientA()).toEqual('shippingCompany: trackNumber')
  })
})
