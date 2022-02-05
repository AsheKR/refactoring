/* 
함수 안에서 어떤 코드의 결과 값이 뒤에서 다시  참조 될 목적으로 임시 변수를 쓰기도 한다.
임시 변수를 사용하면 계산하는 코드가 반복되는 걸 줄이고, 값의 의미를 설명할 수 있어서 유용하다.
그런데 한걸음 더 나아가 아예 함수로 만들어 사용하는 편이 나을 때가 많다.

긴 함수의 한 부분을 별도의 함수로 추출하고자 할 때 먼저 변수들을 각각의 함수로 만들면 일이 수월해진다.
추출할 함수에 변수를 따로 전달할 필요가 없어지기 때문이다. 또한 이 덕분에 추출한 함수와 원래 함수의 경계가 더 명확해지기도 하는데
그러면 부자연스러운 의존 관계나 부수 효과를 찾고 제거하는 데 도움이 된다.

임시 변수를 질의 함수로 바꾼다고 다 좋아지는 건 아니다. 자고로 변수는 값을 한 번만 계산하고, 그 뒤로는 읽기만 해야 한다.
또한 이 계산 로직은 다음번에 사용될 때 수행해도 똑같은 결과를 내야 한다.
*/

interface ItemInterface {
  price: number
}

export class Order {
  private _quantity: number
  private _item: ItemInterface
  constructor(quantity: number, item: ItemInterface) {
    this._quantity = quantity
    this._item = item
  }

  get price() {
    let basePrice = this._quantity * this._item.price
    let discountFactor = 0.98

    if (basePrice > 1000) discountFactor -= 0.03
    return basePrice * discountFactor
  }
}
