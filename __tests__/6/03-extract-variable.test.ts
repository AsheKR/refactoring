import {Order, price} from '../../src/6/03-extract-variable'
import {expect, describe, it} from '@jest/globals'


describe('Test 06.03. Extract Variable', () => {
    it('price', async () => {
        expect(price({'quantity': 5, 'itemPrice': 500})).toEqual(2600)
    })
    it('Order.price', async () => {
        expect(new Order({'quantity': 5, 'itemPrice': 500}).price).toEqual(2600)
    })
})