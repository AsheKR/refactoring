import {alertForMiscreant} from '../../src/11/01-separate-query-from-modifier'
import {expect, describe, it} from '@jest/globals'

describe('Test 11.01. Separate Query From Modifier', () => {
  it('alertForMiscreant.조커', async () => {
    const peoples = ['모니터', '책상', '조커']
    expect(alertForMiscreant(peoples)).toEqual('조커')
  })

  it('alertForMiscreant.사루만', async () => {
    const peoples = ['모니터', '사루만', '책상']
    expect(alertForMiscreant(peoples)).toEqual('사루만')
  })
})
