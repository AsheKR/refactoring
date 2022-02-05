/*  
위임 메서드가 늘어나면 서버 클래스는 그저 주애자 역할로 전락하여, 차라리 클라이언트가 위임 객체를 직접 호출하는게 나을 수 있다.
어느정도 숨겨야할지 판단하기 쉽지 않지만, 위임 숨기기와 중개자 제거하기 리팩터링이 있으니 크게 문제되지 않는다.
시스템이 바뀌면 적절하다의 기준이 바뀌기 마련이다.
*/

class Person {
  private _name: string
  private _department: Department
  constructor(name: string, department: Department) {
    this._name = name
    this._department = department
  }

  get name() {
    return this._name
  }
  get manager() {
    return this._department
  }
}

class Department {
  private _manager: string | undefined
  private _chargeCode: string | undefined
  get chargeCode() {
    return this._chargeCode
  }
  set chargeCode(arg) {
    this._chargeCode = arg
  }
  get manager() {
    return this._manager
  }
  set manager(arg) {
    this._manager = arg
  }
}

export function clientA() {
  const department = new Department()
  department.manager = 'Manager'
  department.chargeCode = 'CC'

  const aPerson = new Person('Ashe', department)

  const manager = aPerson.manager
  return manager
}
