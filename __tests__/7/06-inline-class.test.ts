import {TrackingInformation, Shipment} from '../../src/7/06-inline-class'
import {expect, describe, it} from '@jest/globals'

describe('Test 07.06. Inline Class', () => {
    it('Shipment.display', async () => {
        const trackInfromation = new TrackingInformation('company', 'number')
        const shipment = new Shipment(trackInfromation)
        expect(shipment.trackingInfo).toEqual('company: number')
    })
})