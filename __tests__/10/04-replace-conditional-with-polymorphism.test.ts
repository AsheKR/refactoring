import {
  plumges,
  speeds,
  rating
} from '../../src/10/04-replace-conditional-with-polymorphism'
import {expect, describe, it} from '@jest/globals'

describe('Test 10.04. Replace Conditional With Polymorphism', () => {
  it('plumges', async () => {
    const birds = [
      {name: '유럽 제비', type: '유럽 제비'},
      {name: '아프리카 제비1', type: '아프리카 제비', numberOfCoconuts: 3},
      {name: '아프리카 제비2', type: '아프리카 제비', numberOfCoconuts: 2},
      {
        name: '노르웨이 파랑 앵무1',
        type: '노르웨이 파랑 앵무',
        voltage: 90,
        isNailed: true
      },
      {
        name: '노르웨이 파랑 앵무2',
        type: '노르웨이 파랑 앵무',
        voltage: 101,
        isNailed: true
      },
      {name: '알 수 없다', type: '알 수 없다'}
    ]
    expect(plumges(birds)).toEqual(
      new Map([
        ['유럽 제비', '보통이다'],
        ['아프리카 제비1', '지쳤다'],
        ['아프리카 제비2', '보통이다'],
        ['노르웨이 파랑 앵무1', '예쁘다'],
        ['노르웨이 파랑 앵무2', '그을렸다'],
        ['알 수 없다', '알 수 없다']
      ])
    )
  })

  it('airSpeedVelocity', async () => {
    const birds = [
      {name: '유럽 제비', type: '유럽 제비'},
      {name: '아프리카 제비1', type: '아프리카 제비', numberOfCoconuts: 3},
      {
        name: '노르웨이 파랑 앵무1',
        type: '노르웨이 파랑 앵무',
        voltage: 100,
        isNailed: true
      },
      {
        name: '노르웨이 파랑 앵무2',
        type: '노르웨이 파랑 앵무',
        voltage: 100,
        isNailed: false
      },
      {name: '알 수 없다', type: '알 수 없다'}
    ]
    expect(speeds(birds)).toEqual(
      new Map([
        ['유럽 제비', 35],
        ['아프리카 제비1', 34],
        ['노르웨이 파랑 앵무1', 0],
        ['노르웨이 파랑 앵무2', 20],
        ['알 수 없다', null]
      ])
    )
  })

  it('rating', async () => {
    const voyage = {zone: '서인도', length: 10}
    const history = [
      {zone: '동인도', profit: 5},
      {zone: '서인도', profit: 15},
      {zone: '중국', profit: -2},
      {zone: '서아프리카', profit: 7}
    ]
    expect(rating(voyage, history)).toEqual('B')
  })
})
