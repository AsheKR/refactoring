import {Order} from '../../src/7/04-replace-temp-with-query'
import {expect, describe, it} from '@jest/globals'


describe('Test 07.04. Replace Temp With Query', () => {
    it('Order.price', async () => {
        const order = new Order(5, {price: 500})
        expect(order.price).toEqual(2375)
    })
})