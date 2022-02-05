/* 
클래스가 점점 비대화해 졌을 때 일부 메서드와 데이터를 묶을 수 있다면 어서 분리하라는 신호이다.
함께 변경되는 일이 많거나 서로 의존하는 데이터들도 분리한다. 특정 데이터나 메서드 일부를 제거하면 어떤 일이 일어나는지 자문해보면 판단에 도움이된다.
제거해도 다른 필드나 메서드들이 논리적으로 문제가 없다면 분리할 수 있다는 뜻이다.
*/

export class Person {
  private _name: string
  private _officeAreaCode: string
  private _officeNumber: string
  constructor(name: string, officeAreaCode: string, officeNumber: string) {
    this._name = name
    this._officeAreaCode = officeAreaCode
    this._officeNumber = officeNumber
  }
  get name() {
    return this._name
  }
  set name(arg: string) {
    this._name = arg
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`
  }
  get officeAreaCode() {
    return this._officeAreaCode
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg
  }
  get officeNumber() {
    return this._officeNumber
  }
  set officeNumber(arg) {
    this._officeNumber = arg
  }
}
