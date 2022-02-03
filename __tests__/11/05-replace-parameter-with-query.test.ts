import {Order} from '../../src/11/05-replace-parameter-with-query'
import {expect, describe, it} from '@jest/globals'


describe('Test 11.02. Remove Flag Arguments', () => {
    it('Order.discountedPrice', async () => {
        expect(new Order(5, 100).finalPrice).toEqual(475)
    })
})