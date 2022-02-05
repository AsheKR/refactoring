import {
  Order,
  gethigherPriorityCount
} from '../../src/7/03-replace-primitive-with-object'
import {expect, describe, it} from '@jest/globals'

describe('Test 07.03. Replace Primitive With Object Test', () => {
  it('gethigherPriorityCount', async () => {
    const orders = [
      new Order({priority: 'high'}),
      new Order({priority: 'low'}),
      new Order({priority: 'rush'}),
      new Order({priority: 'low'})
    ]
    expect(gethigherPriorityCount(orders)).toEqual(2)
  })
})
