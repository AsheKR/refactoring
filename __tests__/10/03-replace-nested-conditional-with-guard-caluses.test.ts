import {adjustedCapital, payAmount} from '../../src/10/03-replace-nested-conditional-with-guard-clauses'
import {expect, describe, it} from '@jest/globals'


describe('Test 10.03. Replace Nested Conditional With Guard Clauses', () => {
    it('payAmount.isSeparated', async () => {
        const anEmployee = {
            isSeparated: true,
            isRetired: false
        }
        expect(payAmount(anEmployee)).toEqual({amount: 0, reasonCode: 'SEP'})
    })
    it('payAmount.isRetired', async () => {
        const anEmployee = {
            isSeparated: false,
            isRetired: true
        }
        expect(payAmount(anEmployee)).toEqual({amount: 0, reasonCode: 'RET'})
    })
    it('payAmount', async () => {
        const anEmployee = {
            isSeparated: false,
            isRetired: false
        }
        expect(payAmount(anEmployee)).toEqual({amount: 1})
    })

    it('adjustedCaptial.captial', async () => {
        const anInsturment = {
            capital: -1,
            interstRate: 5,
            duration: 60,
            income: 1000,
            adjustmentFactor: 5
        }
        expect(adjustedCapital(anInsturment)).toEqual(0)
    })
    it('adjustedCaptial.interstRate', async () => {
        const anInsturment = {
            capital: 3,
            interstRate: -1,
            duration: 60,
            income: 1000,
            adjustmentFactor:51
        }
        expect(adjustedCapital(anInsturment)).toEqual(0)
    })
    it('adjustedCaptial.duration', async () => {
        const anInsturment = {
            capital: 3,
            interstRate: 5,
            duration: -1,
            income: 1000,
            adjustmentFactor: 5,
        }
        expect(adjustedCapital(anInsturment)).toEqual(0)
    })
    it('adjustedCaptial', async () => {
        const anInsturment = {
            capital: 3,
            interstRate: 5,
            duration: 60,
            income: 1000,
            adjustmentFactor: 5,
        }
        expect(adjustedCapital(anInsturment)).toBeCloseTo(83.33)
    })
})