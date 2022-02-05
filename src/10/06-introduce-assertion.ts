/*  
어셔선은 항상 참이라고 가정하는 조건부 문장으로, 어서션일 실패했다는 말은 프로그래머가 잘못했다는 뜻이다.
어서션의 실패는 시스템의 다른 부분에서는 절대 검사하지 않아야 하며, 어서션이 있고 없고가 프로그램 기능의 정상 동작 여부에 아무런 영향을 주지 않아야 한다.

어셔선을 오류 찾기에 활용하라고 추천하기도하고 프로그램이 어떤 상태임을 가정한 채 실행되는지 다른 개발자에게 알려주는 훌륭한 소통도구이다.
한편 테스트코드가 있다면 어서션의 디버깅 용도로서의 효용은 줄어든다. 단위 테스트를 꾸준히 추가하여 사각을 좁히면 어서션 보다 나을 때가 많다.
하지만 소통 측면에서는 어서션이 여전히 매력적이다.
*/

export class Cusomter {
  discountRate: number = 10

  applyDiscount(aNumber: number) {
    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber
  }
}
