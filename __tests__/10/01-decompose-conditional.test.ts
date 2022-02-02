import {ReferenceDate, clientA} from '../../src/10/01-decompose-conditional'
import {expect, describe, it} from '@jest/globals'


describe('Test 10.01. Decompose Conditional', () => {
    it('clientA.isSummer', async () => {
        const referenceDate = new ReferenceDate(new Date('2022-07-11'))
        expect(clientA(referenceDate, 5)).toEqual(45)
    })
    it('clientA.isNotSummer', async () => {
        const referenceDate = new ReferenceDate(new Date('2022-11-11'))
        expect(clientA(referenceDate, 5)).toEqual(35)
    })
})