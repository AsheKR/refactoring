import {Invoice, printOwing} from '../../src/6/01-extract-function'
import {afterEach, beforeEach, expect, test} from '@jest/globals'


test('Test console.log() output', async () => {

    const originalLog = console.log
    console.log = originalLog

    const invoice = {
        'customer': 'Ashe',
        'orders': [{'amount': 200}, {'amount': 500}, {'amount': 300}],
    }

    let consoleOutput: [string?] = []
    const mockLog = (output: string) => consoleOutput.push(output)
    console.log = mockLog

    printOwing(invoice as Invoice);

    expect(consoleOutput).toEqual([
        '*****************',
        '**** 고객 채무 ****',
        '*****************',
        '고객명: Ashe',
        '채무액: 1000',
        '마감일: 2022. 2. 28.'
    ])

    console.log = originalLog
})