/*  
캡슐화는 모듈들이 시스템의 다른 부분에 대해 알아야 할 내용을 줄여준다.
캡슐화가 잘 되어 있다면 무언가를 변경할 때 함께 고려해야 할 모듈 수 가 적어져서 코드를 변경하기 훨씬 쉬워진다.
*/

class Person {
    private _name: string;
    private _department: Department | undefined;
    constructor(name: string) {
        this._name = name
    }

    get name() {return this._name}
    get department() {return this._department}
    set department(arg) {this._department = arg}
}


class Department {
    private _manager: string | undefined;
    private _chargeCode: string | undefined;
    get chargeCode() {return this._chargeCode}
    set chargeCode(arg) {this._chargeCode = arg}
    get manager() {return this._manager}
    set manager(arg) {this._manager = arg}
}

export function clientA() {
    const department = new Department()
    department.manager = 'Manager'
    department.chargeCode = 'CC'

    const aPerson = new Person('Ashe')
    aPerson.department = department

    const manager = aPerson.department.manager
    return manager
}