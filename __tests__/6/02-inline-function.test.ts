import {rating, reportLines} from '../../src/6/02-inline-function'
import {expect, describe, it} from '@jest/globals'

describe('Test 06.02. Inline Function', () => {
  it('rating less 5 than 1', async () => {
    const aDriver = {
      numberOfLateDeliveries: 4
    }
    expect(rating(aDriver)).toEqual(1)
  })
  it('rating equal 5 than 1', async () => {
    const aDriver = {
      numberOfLateDeliveries: 5
    }
    expect(rating(aDriver)).toEqual(1)
  })

  it('rating equal 5 than 2', async () => {
    const aDriver = {
      numberOfLateDeliveries: 6
    }
    expect(rating(aDriver)).toEqual(2)
  })

  it('reportLines', async () => {
    const aCustomer = {
      name: 'Ashe',
      location: 'Seoul'
    }
    expect(reportLines(aCustomer)).toEqual([
      ['name', 'Ashe'],
      ['location', 'Seoul']
    ])
  })
})
