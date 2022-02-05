import {acquireData} from '../../src/8/08-replace-loop-with-pipeline'
import {expect, describe, it} from '@jest/globals'

describe('Test 08.08. Replace Loop with Pipeline', () => {
  it('acquireData', async () => {
    const csv = [
      'office,country,telephone',
      'Chicago,USA,+1 312 373 1000',
      'Beijing,China,+86 4006 900 505',
      'Bangalore,India,+91 80 4064 9570',
      'Porto Algere,Brazil,+55 51 3-79 3550\n',
      'Chennai,India,+91 44 660 44776'
      //  ...
    ].join('\n')
    expect(acquireData(csv)).toEqual([
      {city: 'Bangalore', phone: '+91 80 4064 9570'},
      {city: 'Chennai', phone: '+91 44 660 44776'}
    ])
  })
})
