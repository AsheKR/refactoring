import {customerData, compareUsage, somethingMethod, getOrganization, getResult, setOrganizationName} from '../../src/7/01-encapsulate-record'
import {expect, describe, it} from '@jest/globals'


describe('Test 07.01. Encapsulate Record', () => {
    it('getResult', async () => {
        expect(getResult()).toEqual('<h1>애크미 구스베리</h1>')
    })

    it('setOrganizationName', async () => {
        setOrganizationName('애크미')
        expect(getOrganization().name).toEqual('애크미')
    })

    it('somethingMethod', async () => {
        somethingMethod(1920, 2016, 1, 60)
        expect(customerData[1920].usages[2016][1]).toEqual(60)
    })

    it('compareUsage', async () => {
        expect(compareUsage(1920, 2016, 2)).toEqual({ laterAmount: 55, change: -8 })
    })
})