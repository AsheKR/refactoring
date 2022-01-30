import {getOrganization, getResult, setOrganizationName} from '../../src/7/01-encapsulate-record'
import {expect, describe, it} from '@jest/globals'


describe('Test Encapsulate Record', () => {
    it('getResult', async () => {
        expect(getResult()).toEqual('<h1>애크미 구스베리</h1>')
    })

    it('setOrganizationName', async () => {
        setOrganizationName('애크미')
        expect(getOrganization().name).toEqual('애크미')
    })
})