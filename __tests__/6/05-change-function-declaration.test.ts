import {Book, circum, aCustomer, isInNewEnglandInSomeCustomers} from '../../src/6/05-change-function-declaration'
import {expect, describe, it} from '@jest/globals'


describe('Test circum', () => {
    it('default', async () => {
        expect(circum(5)).toBeCloseTo(31.415)
    })
})

describe('Test Book', () => {
    it('addReservation', async () => {
        const book = new Book()
        book.addReservation('Customer')
        expect(book.reservations.length).toEqual(1)
    })
})

describe('Test isNewEngland', () => {
    it('default', async () => {
        const customers: aCustomer[] = [
            {'address': {'state': 'MA'}},
            {'address': {'state': 'CT'}},
            {'address': {'state': 'ME'}},
            {'address': {'state': 'VT'}},
            {'address': {'state': 'NH'}},
            {'address': {'state': 'RI'}},
            {'address': {'state': 'KR'}},
        ]
        expect(isInNewEnglandInSomeCustomers(customers).length).toEqual(6)
    })
})