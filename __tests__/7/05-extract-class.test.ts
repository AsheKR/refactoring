import {Person} from '../../src/7/05-extract-class'
import {expect, describe, it} from '@jest/globals'

describe('Test 07.05. Extract Class', () => {
  it('Person.telephoneNumber', async () => {
    const person = new Person('Ashe', 'SE', '00-0000-000')
    expect(person.telephoneNumber).toEqual('(SE) 00-0000-000')
  })
})
