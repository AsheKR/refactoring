/* 
조건부 로직을 통합하는게 중요한 이유는 두가지이다.
    - 여러 조각으로 나뉜 조건들을 하나로 통합함으로서 내가 하려는 일이 명확해진다.
        나눠서 순서대로 비교해도 결과는 같지만 읽는 사람은 독립된 검사들이 우연히 함께 나열된 것으로 오해할 수 있다.
    - 이 작업이 함수 추출하기까지 이어질 가능성이 높다.
        복잡한 조건식을 하무로 추출하면 코드의 의도가 훨씬 분명하게 드러나는 경우가 많다. 함수 추출하기는 무엇을 하는지를 기술하던 코드를
        왜 하는 코드인지를 말해주는 코드로 바꿔주는 효과적인 도구임을 기억하자.
*/

interface Employee {
  seniority: number
  monthsDisabled: number
  isPartTime: boolean
}

export function disabilityAmount(anEmployee: Employee) {
  if (anEmployee.seniority < 2) return 0
  if (anEmployee.monthsDisabled < 12) return 0
  if (anEmployee.isPartTime) return 0
  // 장애 수당 계산
  return 1
}

// -----------------------------------------------------------------------------

function amount(anEmployee: any) {
  if (anEmployee.onVacation) {
    if (anEmployee.seniority > 10) {
      return 1
    }
    return 0.5
  }
}
