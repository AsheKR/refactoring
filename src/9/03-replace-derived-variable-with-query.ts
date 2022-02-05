/*  
가변 데이터는 소프트웨어에 문제를 일으키는 가장 큰 골칫거리에 속한다. 그렇다고 가변데이터를 완전히 배제하기란 현실적으로 불가능할 때가 많지만, 가변데이터의 유효범위를 가능한 좁혀야 한다.
효과가 좋은 방법으로, 값을 쉽게 계산해낼 수 있는 변수들은 모두 제거할 수 있다. 계산과정을 보여주는 코드 자체가 데이터의 의미를 더 분명히 드러내는 경우도 자주 있으며
변경된 값을 깜빡하고 결과 변수에 반영하지 않는 실수를 막아준다.

예외가 두가지 있다.
    - 데이터 구조를 감싸며 그 데이터에 기초하여 계산한 결과를 속성으로 제공하는 객체
    - 데이터 구조를 받아 다른 데이터 구조로 변환해 반환하는 함수
*/

interface Adjustment {
  amount: number
}

export class ProductionPlan {
  private _production: number = 0
  private _adjustments: Adjustment[] = []

  get production() {
    return this._production
  }
  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustments.push(anAdjustment)
    this._production += anAdjustment.amount
  }
}
