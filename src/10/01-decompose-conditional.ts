/* 
복잡한 조건부 로직은 프로그램을 복잡하게 만드는 가장 흔한 원흉에 속한다. 다양한 조건, 그에 따라 동작도 다양한 코드를 작성하면 순식간에 꽤 긴 함수가 탄생한다.
긴 함수는 그 자체로 읽기가 얿지만, 조건문은 그 어려움을 한층 가중시킨다. 조건을 검사하고 그 결과에 따른 동작을 표현한 코드는 무슨일이 일어나는지 이야기해주지만,
왜 일어났는지 제대로 말해주지 않을 때가 많은 것이 문제이다.

거대한 코드 블록이 주어지면 코드를 부위별로 분해한 다음 해체된 코드 덩어리들을 각 덩어리의 의도를 살린 이름의 함수 호출로 바꿔주자. 
그러면 전체적인 의도가 더 확실히 드러난다. 이렇게 하면 조건이 무엇인지 강조하고, 그래서 무엇을 분기했는지가 명백해진다. 분기한 이유 역시 더 명확해진다.
*/


export class ReferenceDate {
    private _date: Date
    constructor(date: Date) {
        this._date = date
    }
    isBefore(date: Date) {
        return this._date < date
    }
    isAfter(date: Date) {
        return this._date > date
    }
}


interface Plan {
    summerStart: Date
    summerEnd: Date
    summerRate: number
    regularRate: number
    regularServiceCharge: number
}

const plan: Plan = {
    summerStart: new Date('2022-06-21'),
    summerEnd: new Date('2022-09-23'),
    summerRate: 9,
    regularRate: 5,
    regularServiceCharge: 10
}


export function clientA(aDate: ReferenceDate, quantity: number) {
    let charge = 0
    if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
        charge = quantity * plan.summerRate
    } else {
        charge = quantity * plan.regularRate + plan.regularServiceCharge
    }

    return charge
}