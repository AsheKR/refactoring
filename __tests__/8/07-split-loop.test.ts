import {clientA} from '../../src/8/07-split-loop'
import {expect, describe, it} from '@jest/globals'


describe('Test 08.07. Split Loop', () => {
    it('clientA', async () => {
        expect(clientA()).toEqual('최연소: 13, 총 급여 3400')
    })
})