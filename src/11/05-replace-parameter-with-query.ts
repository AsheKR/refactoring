/*  
매개변수는 변동 요인을 모아놓은 곳이다. 매개변수는 책임의 주체가 호출하는 쪽에 있다는 것이고, 없다면 피호출 함수 쪽에 책임이 있다는 것이다.

매개변수를 질의 함수로 바꾸지 말아야 할 상황도 있다. 가장 흔한 예는 매개 변수를 제거하면 피호출 함수에 원치 않는 의존성이 생길 때다.
제거하려는 매개변수의 값을 다른 매개변수에 질의해서 얻을 수 있다면 안심하고 질의 함수로 바꿀 수 있다.

주의 사항이 하나 있다. 대상 함수가 참조투명해야한다는 것이다. 참조 투명이란 함수에 똑같은 값을 건네면 항상 똑같이 동작한다는 것이다.
이런 함수는 동작을 예측하고 테스트하기 훨씬 쉬우니 이 특성이 사라지지 않게 주의하자. 따라서 매개변수를 없애는 대신, 가변 전역 변수를 이용하는 일은 안된다.
*/


export class Order {
    quantity: number
    itemPrice: number

    constructor(quantity: number, itemPrice: number) {
        this.quantity = quantity
        this.itemPrice = itemPrice
    }

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice
        let discountLevel
        if (this.quantity > 100) discountLevel = 2
        else discountLevel = 1
        return this.discountedPrice(basePrice, discountLevel)
    }

    discountedPrice(basePrice: number,  discountLevel: number) {
        switch(discountLevel) {
            case 1: return basePrice * 0.95
            case 2: return basePrice * 0.9
        }
    }
}
