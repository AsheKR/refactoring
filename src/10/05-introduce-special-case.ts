/* 
데이터 구조의 특정 값을 확인한 후 똑같은 동작을 수행하는 코드가 곳곳에 등장하는 경우가 더러 있는데 흔히 볼 수 있는 중복 코드 중 하나다.
특수한 경우 공통 동작을 요소 하나에 모아서 사용하는 특이 케이스 패턴이라는 것이 있는데 이럴 때 적용하면 좋은 매커니즘이다. 이 패턴을 활용하면 특이 케이스를 확인하는
코드 대부분을 단순한 함수 호출로 바꿀 수 이삳.
*/


export class Customer {
    private _name: string
    private _billingPlan: any
    constructor(name: string) {
        this._name = name
    }
    get name() {return this._name}
    get billingPlan() {return this._billingPlan}
    set billingPlan(arg) {this._billingPlan = arg}
    get paymanetHistory() {return {'weeksDeliquentInLastYear': 10}}
    valueOf() {
        return this._name
    }
}


class Site {
    private _customer: any
    constructor(customer: Customer) {
        this._customer = customer
    }
    get customer() {return this._customer}
}

function clientA(site: Site) {
    const aCustomer = site.customer
    //  ... 수많은 코드 ...
    let customerName
    if (aCustomer === '미확인 고객') customerName = '거주자'
    else customerName = aCustomer.name
}

function clientB(site: Site) {
    const aCustomer = site.customer
    const registryBillingPlansBasic = 'Basic Plan'
    const plan = (aCustomer === '미확인 고객') ? registryBillingPlansBasic : aCustomer.billingPlan
    return plan
}

function clientC(site: Site) {
    const aCustomer = site.customer
    const newPlan = 'New Plan'
    if (aCustomer !== '미확인 고객') aCustomer.billingPlan = newPlan
}

function client4(site: Site) {
    const aCustomer = site.customer
    const weeksDelinquent = (aCustomer === '미확인 고객') ? 0 : aCustomer.paymentHistory.weeksDeliquentInLastYear
    return weeksDelinquent
}