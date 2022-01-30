import {printOwing} from '../../src/6/01-extract-function'
import {expect, test} from '@jest/globals'
import MockDate from 'mockdate'


test('Test console.log() output', async () => {
    const originalLog = console.log
    console.log = originalLog

    let consoleOutput: [string?] = []
    const mockLog = (output: string) => consoleOutput.push(output)
    console.log = mockLog

    MockDate.set('2000-11-22')

    const invoice = {
        'customer': 'Ashe',
        'orders': [{'amount': 200}, {'amount': 500}, {'amount': 300}],
    }
    printOwing(invoice);

    expect(consoleOutput).toEqual([
        '*****************',
        '**** 고객 채무 ****',
        '*****************',
        '고객명: Ashe',
        '채무액: 1000',
        '마감일: 2000. 12. 22.'
    ])

    console.log = originalLog
    MockDate.reset()
})