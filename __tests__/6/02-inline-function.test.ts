import {rating, reportLines} from '../../src/6/02-inline-function'
import {expect, describe, it} from '@jest/globals'


describe('Test rating', () => {

    it('less 5 than 1', async () => {
        const aDriver = {
            numberOfLateDeliveries: 4
        }
        expect(rating(aDriver)).toEqual(1);
    })
    it('equal 5 than 1', async () => {
        const aDriver = {
            numberOfLateDeliveries: 5
        }
        expect(rating(aDriver)).toEqual(1);
    })

    it('equal 5 than 2', async () => {
        const aDriver = {
            numberOfLateDeliveries: 6
        }
        expect(rating(aDriver)).toEqual(2);
    })
})

describe('Test reportLines', () => {
    it('default', async () => {
        const aCustomer = {
            'name': 'Ashe',
            'location': 'Seoul'
        }
        expect(reportLines(aCustomer)).toEqual([ [ 'name', 'Ashe' ], [ 'location', 'Seoul' ] ])
    })
})