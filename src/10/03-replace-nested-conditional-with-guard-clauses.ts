/* 
조건문은 주로 두가지 형태로 쓰인다.
    - 참인 경로와 거짓경로 모두 정상 동작으로 이어지는 형태
    - 한쪽만 정상인 형태

두 형태는 의도하는 바가 다르기 때문에 코드에 그 의도가 드러나야 한다. 두 경로 모두 정상 동작이라면 if 와 else 절을 사용한다.
한쪽만 정상이라면 비정상 조건을 if 에서 검사한 다음 비정상이면 함수에서 빠져나온다. 두번째 검사 형태를 흔히 보호 구문이라고 한다.

저자는 if-else 절에 똑같은 무게를 두어 코드를 읽는 이에게 양갈래 똑같이 중요하다는 뜻을 전하고
이와 달리 보호 구문은 "이건 이 함수의 핵심이 아니다. 이 일이 일어나면 무언가 조치를 취한 후 함수에서 빠져나온다" 라고 이야기 한다.
*/


interface Employee {
    isSeparated: boolean
    isRetired: boolean
}


export function payAmount(employee: Employee) {
    let result
    if (employee.isSeparated) {
        result = {amount: 0, reasonCode: 'SEP'}
    } else {
        if (employee.isRetired) {
            result = {amount: 0, reasonCode: 'RET'}
        }
        else {
            // 급여 계산 로직
            result = {amount: 1}
        }
    }
    
    return result
}

// -----------------------------------------------------------------------------

interface Instrument {
    capital: number,
    interstRate: number
    duration: number
    income: number
    adjustmentFactor: number
} 

export function adjustedCapital(anInstrument: Instrument) {
    let result = 0
    if (anInstrument.capital > 0) {
        if (anInstrument.interstRate > 0 && anInstrument.duration > 0) {
            result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor
        }
    }
    return result
}