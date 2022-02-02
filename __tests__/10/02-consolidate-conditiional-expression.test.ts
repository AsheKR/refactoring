import {disabilityAmount} from '../../src/10/02-consolidate-conditional-expression'
import {expect, describe, it} from '@jest/globals'


describe('Test 10.02. Consolidate Conditional Expression', () => {
    it('disabilityAmount.seniority', async () => {
        const anEmployee = {
            seniority: 1,
            monthsDisabled: 13,
            isPartTime: false
        }
        expect(disabilityAmount(anEmployee)).toEqual(0)
    })
    it('disabilityAmount.monthsDisabled', async () => {
        const anEmployee = {
            seniority: 3,
            monthsDisabled: 0,
            isPartTime: false
        }
        expect(disabilityAmount(anEmployee)).toEqual(0)
    })
    it('disabilityAmount.isPartTime', async () => {
        const anEmployee = {
            seniority: 3,
            monthsDisabled: 13,
            isPartTime: true
        }
        expect(disabilityAmount(anEmployee)).toEqual(0)
    })
    it('disabilityAmount.isPartTime', async () => {
        const anEmployee = {
            seniority: 3,
            monthsDisabled: 13,
            isPartTime: false
        }
        expect(disabilityAmount(anEmployee)).toEqual(1)
    })
})