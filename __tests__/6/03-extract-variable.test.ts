import {Order, price} from '../../src/6/03-extract-variable'
import {expect, describe, it} from '@jest/globals'


describe('Test price', () => {
    it('default', async () => {
        expect(price({'quantity': 5, 'itemPrice': 500})).toEqual(2600)
    })
})


describe('Test Order class', () => {
    it('price', async () => {
        expect(new Order({'quantity': 5, 'itemPrice': 500}).price).toEqual(2600)
    })
})