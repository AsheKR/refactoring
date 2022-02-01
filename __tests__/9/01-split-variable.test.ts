import {distanceTravelled} from '../../src/9/01-split-variable'
import {expect, describe, it} from '@jest/globals'


describe('Test 09.01. Split Variable', () => {
    it('distanceTravelled.notHasSecondaryForce', async () => {
        expect(distanceTravelled({primaryForce: 5, secondaryForce: 6, delay: 2, mass: 2}, 5)).toEqual(376.25)
    })

    it('distanceTravelled.hasSecondaryForce', async () => {
        expect(distanceTravelled({primaryForce: 5, secondaryForce: 0, delay: 2, mass: 2}, 5)).toEqual(173.75)
    })
})