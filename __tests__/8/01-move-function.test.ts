import {trackSummary, Account} from '../../src/8/01-move-function'
import {expect, describe, it} from '@jest/globals'


describe('Test 08.01. Move Function', () => {
    it('trackSummary', async () => {
        expect(trackSummary([{lat: 37.2387363, lon: 127.1920848}, {lat: 37.3622532, lon:126.806606}])).toEqual({
            time: 180,
            distance: 7895.719234462541,
            pace: 0.00037995272006454637
        })
    })

    it('Account.bankCharge', async () => {
        expect(new Account(3, false).bankCharge).toEqual(9.75)
    })

})