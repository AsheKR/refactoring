/*  
객체를 다른 객체에 중첩하면 내부 객체를 참조 혹은 값으로 취급할 수 있다.
참조로 다루는 경우 내부 객체는 그대로 둔 채 그 객체의 속성만 갱신하며
값으로 다루는 경우 새로운 속성을 담은 객체로 기존 내부 객체를 통째로 대체한다.

값 객체는 대체로 자유롭게 활용하기 좋은데 특히 불변이기 때문이다. 일반적으로 불변 데이터 구조는 다루기 더 쉽다.
값을 복제해 이곳저곳 사용하더라도 서로 간 참조를 관리하지 않아도 된다. 그래서 값 객체는 분산 시스템과 동시성 시스템에서 특히 유용하다.

한편 값 객체의 이런 특성 때문에 공유 객체로 사용할때는 사용하면 안된다. 변경 시 다른 객체 모두에게 변경을 알려야 하기 때문이다.
*/


class Person {
    private _telephoneNumber: TelephoneNumber
    constructor(officeAreaCode: string, officeNumber: string) {
        this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber)
    }
    get telephoneNumber() { return `(${this.officeAreaCode}) ${this.officeNumber}` }
    get officeAreaCode() { return this._telephoneNumber.areaCode }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg }
    get officeNumber() { return this._telephoneNumber.number }
    set officeNumber(arg) { this._telephoneNumber.number = arg }
}


class TelephoneNumber {
    private _areaCode: string
    private _number: string
    constructor(areaCode: string, number: string) {
        this._areaCode = areaCode
        this._number = number
    }

    get areaCode(): string {
        return this._areaCode
    }
    set areaCode(value: string) {
        this._areaCode = value
    }
    get number(): string {
        return this._number
    }
    set number(value: string) {
        this._number = value
    }
}