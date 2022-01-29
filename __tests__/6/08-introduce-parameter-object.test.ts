import {callReadingOutsideRange} from '../../src/6/08-introduce-parameter-object'
import {expect, describe, it} from '@jest/globals'


describe('Test readingOutsideRange', () => {
    it('callReadingOutsideRange', async () => {
        const result = callReadingOutsideRange()
        expect(result).toEqual( [
            { temp: 47, time: '2016-11-10 09:10' },
            { temp: 58, time: '2016-11-10 09:30' }
        ])
    })
})
