import {clientA, clientB, clientC} from '../../src/6/09-combine-functions-into-class'
import {expect, describe, it} from '@jest/globals'


describe('Test client', () => {
    it('clientA', async () => {
        expect(clientA()).toEqual(20170)
    })

    it('clientB', async () => {
        expect(clientB()).toEqual(18153)
    })

    it('clientC', async () => {
        expect(clientC()).toEqual(20170)
    })
})
