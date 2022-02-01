import {Amount, Customer} from '../../src/8/02-move-field'
import {expect, describe, it} from '@jest/globals'


describe('Test 08.02. Move Field', () => {
    it('Customer.becomePreferred', async () => {
        const aCustomer = new Customer('Ashe', 0.5)
        aCustomer.becomePreferred()
        expect(aCustomer.discountRate).toEqual(0.53)
    })
    it('Customer.applyDiscount', async () => {
        const anAmount = new Amount(100)
        const aCustomer = new Customer('Ashe', 0.2)
        expect(aCustomer.applyDiscount(anAmount)).toEqual(80)
    })

})