/* 
저자는 단순한 출력 이상의 기능이 필요해지는 순간 그 데이터를 표현하는 전용 클래스를 정의하는 편이다.
처음에는 효과가 미비하지만 프로그램이 커질수록 유용해진다. 경험많은 개발자들의 리팩터링 기법 중 가장 유용한 것으로 손꼽는다.
*/

export class Order {
  priority: string
  constructor(data: any) {
    this.priority = data.priority
    // 나머지 초기화 코드 생략
  }
}

export function gethigherPriorityCount(orders: Order[]) {
  return orders.filter(o => 'high' === o.priority || 'rush' === o.priority)
    .length
}
