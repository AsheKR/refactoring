/* 
표현식이 너무 복잡해서 이해하기 어려울 때가 있다.
이럴 때 지역변수를 활용하면 표현식을 쪼개 관리하기 더 쉽게 만들 수 있다.
그러면 복잡한 로직을 구성하는 단계마다 이름을 붙일 수 있어서 코드의 목적을 훨씬 명확하게 드러낼 수 있다.

장점:
    - 이 과정에서 추가한 변수는 디버깅 중단점이 될 수 있다.

- 클래스에서 데이터를 함수로 추출하는 경우 객체의 엄청난 장점을 볼 수 있다.
    객체는 특정 로직과 데이터를 외부와 공유하려 할 때 공유할 정보를 설명해주는 적당한 크기의 문맥이 되어준다.
*/


interface OrderInterface {
    quantity: number
    itemPrice: number
}


export function price(order: OrderInterface) {
    return order.quantity * order.itemPrice - 
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 + 
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
}


export class Order {
    private _data: OrderInterface

    constructor(aRecord: OrderInterface) {
        this._data = aRecord
    }

    get quantity() {return this._data.quantity}
    get itemPrice() {return this._data.itemPrice}

    get price() {
        return this.quantity * this.itemPrice - 
        Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 + 
        Math.min(this.quantity * this.itemPrice * 0.1, 100)
    }
}