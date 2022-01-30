/* 
정보가 사용되는 곳마다 같은 도출 로직이 반복될 때 모아두기 위해 이 기법을 사용한다.
원본 데이터를 입력받아 필요한 데이터를 모두 도출한 뒤, 출력 데이터의 필드에 넣어 반환한다.
이렇게 해두면 도출 과정을 검토할 일이 생겼을 때 변환 함수만 살펴보면 된다.

클래스로 묶는 것과는 중요한 차이가 있다. 원본 데이터가 코드 안에서 갱신될 때는 클래스로 묶는 편이 훨씬 낫다.
변환 함수로 묶으면 가공한 데이터를 새로운 필드에 저장하므로, 원본 데이터가 수정되면서 일관성이 깨질 수 있기 때문이다.

부가 정보를 추가하는 지금 방식에서 클라이언트가 데이터를 변경하면 심각한 문제가 생길 수 있다.
예컨데 사용량 필드를 변경하면 데이터의 일관성이 깨진다. 이를 해결하기 위해 클래스로 묶는 것이 더 좋다.

이건 클래스가 없는 언어에서에나 사용해야하는 것 같다.
타입스크립트를 쓰면 귀찮아지는 것 같다.
*/
import * as _ from 'lodash'

interface ReadingInterface {
    customer: string
    quantity: number
    month: number
    year: number
}

function aquireReading() {
    return Object.assign({}, {
        customer: 'ivan',
        quantity: 10,
        month: 5,
        year: 2017,
    })
}


function taxThreshold(year: number) {
    return year
}


function baseRate(month: number, year: number) {
    return year
}


function calcBaseCharge(aReading: ReadingInterface) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
}


export function clientA() {
    const aReading = aquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
    return baseCharge
}

export function clientB() {
    const aReading = aquireReading();
    const base = baseRate(aReading.month, aReading.year) * aReading.quantity
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))
    return taxableCharge
}


export function clientC() {
    const aReading = aquireReading();
    const baseChargeAmount = calculateBaseCharge(aReading)

    function calculateBaseCharge(aReading: ReadingInterface) {
        return baseRate(aReading.month, aReading.year) * aReading.quantity
    }

    return baseChargeAmount
}