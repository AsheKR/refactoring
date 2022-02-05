import {
  Book,
  circum,
  isInNewEnglandInSomeCustomers
} from '../../src/6/05-change-function-declaration'
import {expect, describe, it} from '@jest/globals'

describe('Test 06.05. Change Fucntion Declaration', () => {
  it('circum', async () => {
    expect(circum(5)).toBeCloseTo(31.415)
  })

  it('addReservation', async () => {
    const book = new Book()
    book.addReservation('Customer')
    expect(book.reservations.length).toEqual(1)
  })

  it('inNewEngland', async () => {
    const customers = [
      {address: {state: 'MA'}},
      {address: {state: 'CT'}},
      {address: {state: 'ME'}},
      {address: {state: 'VT'}},
      {address: {state: 'NH'}},
      {address: {state: 'RI'}},
      {address: {state: 'KR'}}
    ]
    expect(isInNewEnglandInSomeCustomers(customers).length).toEqual(6)
  })
})
