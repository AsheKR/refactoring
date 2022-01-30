import {createSpaceShip, changeDefaultOwner, defaultOwner} from '../../src/6/06-encapsulate-variable'
import {expect, describe, it} from '@jest/globals'


describe('Test 06.06 Encapsulate Variable', () => {
    it('defaultOwner', async () => {
        expect(defaultOwner).toEqual({firstName: '마틴', lastName: '파울러'})
    })

    it('createSpaceShip', async () => {
        const spaceship = createSpaceShip()
        expect(spaceship.owner).toEqual(defaultOwner)
    })

    it('changeDefaultOwner', async () => {
        changeDefaultOwner()
        expect(defaultOwner).toEqual({firstName: '레베카', lastName: '파슨스'})
    })
})
