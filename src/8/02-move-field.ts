/*  
주어진 문제에 적한한 데이터 구조를 사용하면 동작 코드는 자연스럽게 단순하고 직관적으로 되지만, 그렇지 않은 경우 데이터를 다루기 위한 코드 범벅이 되고 만다.
현재 데이터 구조가 적절치 않음을 깨닫게 되면 곧바로 수정해야 한다. 고치지 않고 데이터 구조에 남겨진 흠들은 우리 머릿속을 혼란스럽게 하고 훗날 작성하게 될 코드를 더욱 복잡하게 만들어버린다.

한 레코드를 변경하려 할 때 다른 레코드의 필드까지 변경해야만 한다면 필드의 위치가 잘못되었다는 신호이다.
구조체 여러 개에 정의된 똑같은 필드들을 갱신해야 한다면 한 번만 갱신해도 되는 다른 위치로 옮기라는 신호이다.
*/


function dateToday() {
    return new Date('2000-11-13')
}


export class Customer {
    private _name: string
    private _discountRate: number
    private _contract: CustomerContract
    constructor(name: string, discountRate: number) {
        this._name = name
        this._discountRate = discountRate
        this._contract = new CustomerContract((dateToday()))
    }

    get discountRate() { return this._discountRate }
    becomePreferred() {
        this._discountRate += 0.03
        // 다른 멋진 일들
    }
    applyDiscount(amount: Amount) {
        return amount.subtract(amount.multiply(this._discountRate))
    }
}

class CustomerContract {
    private _startDate: Date
    constructor(startDate: Date) {
        this._startDate = startDate
    }
}


export class Amount {
    private _amount: number
    constructor(amount: number)   {
        this._amount = amount
    }

    subtract(amount: number) { return this._amount - amount }
    multiply(amount: number) { return this._amount * amount }
}

// -----------------------------------------------------------------------------

class Account {
    private _number: number
    private _type: AccountType
    private _interestRate: number
    constructor(number: number, type: AccountType, interestRate: number) {
        this._number = number
        this._type = type
        this._interestRate = interestRate
    }

    get interestRate() { return this._interestRate }
}


class AccountType {
    private _name: string
    constructor(nameString: string) {
        this._name = nameString
    }
}