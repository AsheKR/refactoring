import {Person, Course, getClientA, clientB, clientC} from '../../src/7/02-encapsulate-collection'
import {expect, describe, it} from '@jest/globals'


describe('Test Encapsulate Collection', () => {
    it('clientA', async () => {
        const aPerson = new Person('Ashe')
        aPerson.courses = [new Course('A', true), new Course('B', false), new Course('C', true)]
        expect(getClientA(aPerson)).toEqual(2)
    })

    it('clientB', async () => {
        const aPerson = new Person('Ashe')
        clientB(aPerson, 'filename')
        expect(aPerson.courses.filter(c => !c.isAdvanced).length).toEqual(3)
    })

    it('clientC', async () => {
        const aPerson = new Person('Ashe')
        clientC(aPerson, 'filename')
        expect(aPerson.courses.filter(c => !c.isAdvanced).length).toEqual(3)
    })
})