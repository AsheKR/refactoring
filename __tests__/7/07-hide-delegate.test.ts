import {clientA} from '../../src/7/07-hide-delegate'
import {expect, describe, it} from '@jest/globals'

describe('Test 07.07. Hide Delegate', () => {
    it('clientA', async () => {
        expect(clientA()).toEqual('Manager')
    })
})