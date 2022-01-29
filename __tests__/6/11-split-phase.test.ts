import {priceOrder} from '../../src/6/11-split-phase'
import {expect, describe, it} from '@jest/globals'


describe('Test priceOrder', () => {
    it('default', async () => {
        const product = {
            basePrice: 100,
            discountThreshold: 30,
            discountRate: 30
        }
        const shippingMethod = {
            discountThreshold: 20,
            discountFee: 1,
            feePerCase: 5
        }
        expect(priceOrder(product, 5, shippingMethod)).toEqual(505)
    })
})
