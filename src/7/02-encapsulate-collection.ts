/* 
객체지향 개발자들은 캡슐화를 적극 권장하는데 컬렉션을 다룰 때 곧잘 실수를 저지르곤 한다.
예컨대 컬렌션 변수로의 접근을 캡슐화하면서 게터가 컬렉션 자체를 반환하도록 한다면, 
그 컬렉션을 감싼 클래스가 눈치채지 못하는 상태에서 컬렉션의 원소가 바뀔 수 있다.

이런 문제를 방지하기 위해 컬렉션을 감싼 클랙스에는 add, remove 의 컬렉션 변경자 메서드를 만든다.
이렇게 항상 컬렉션을 소유한 클래스를 통해서만 원소를 변경하도록 하면 프로그램을 개선하면서 컬렉션 변경 방식도 원하는 대로 수정할 수 있다.

자바스크립트에서는 컬렉션을 읽기 전용으로 제공할 수 있다.
가장 흔히 사용하는 방법으로 내부 컬렉션의 복제본을 반환하는 것이다.

여기서 중요한 점은 코드베이스에서 일관성을 주는 것이다. 앞에 나온 방식 중 한가지만 적용해 컬렌션 접근 함수 동작 방식을 통일해야한다.

저자의 경험에 따르면 컬렉션에 대해서는 어느정도 강박증을 갖고 불필요한 복제본을 만드는 편이, 예상치 못한 수정이 촉발한 오류를 디버깅하는 것보다 낫다.
*/

export class Person {
  private _name: string
  private _courses: Course[]
  constructor(name: string) {
    this._name = name
    this._courses = []
  }

  get name() {
    return this._name
  }
  get courses() {
    return this._courses
  }
  set courses(aList) {
    this._courses = aList
  }
}

export class Course {
  private _name: string
  private _isAdvanced: boolean
  constructor(name: string, isAdvanced: boolean) {
    this._name = name
    this._isAdvanced = isAdvanced
  }
  get name() {
    return this._name
  }
  get isAdvanced() {
    return this._isAdvanced
  }
}

function readBasicCourseNames(filename: string) {
  return ['A', 'B', 'C']
}

// 역할이 뚜렷한 객체 아닌가? 왜 aPerson 이지?
export function getClientA(aPerson: Person) {
  return aPerson.courses.filter(c => c.isAdvanced).length
}

export function clientB(aPerson: Person, filename: string) {
  const basicCoursesNames = readBasicCourseNames(filename)
  aPerson.courses = basicCoursesNames.map(
    (name: string) => new Course(name, false)
  )
}

export function clientC(aPerson: Person, filename: string) {
  for (const name of readBasicCourseNames(filename)) {
    aPerson.courses.push(new Course(name, false))
  }
}
