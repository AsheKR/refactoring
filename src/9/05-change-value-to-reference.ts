/*  
논리적으로 같은 데이터를 물리적으로 복제해 사용할 때 가장 크게 문젣되는 상황은 그 데이터를 갱신해야 할 때다.
모든 복제본을 빠짐없이 갱신해야하며, 놓치면 데이터 일관성이 깨져버린다. 이런 상황이라면 복제된 데이터들을 모두 참조로 바꿔주는 게 좋다.

값을 참조로 바꾸면 엔티티 하나 당 객체도 하나만 존재하게 되는데, 그러면 보통 이런 객체들을 한데 모아놓고 클라이언트들의 접근을 관리해주는
일종의 저장소가 필요해진다. 각 엔티티를 표현하는 객체를 한 번만 만들고, 객체가 필요한 곳에서는 모두 이 저장소로부터 얻어 쓰는 방식이 된다.
*/


class Order {
    private _number: number
    private _customer: Customer
    constructor(data: any) {
        this._number = data.number
        this._customer = new Customer(data.customer)
        // 다른 데이터를 읽어들인다.
    }

    get customer() {return this._customer}
}


class Customer {
    private _id: string
    constructor(id: string) {
        this._id = id
    }

    get id() {return this._id}
}
