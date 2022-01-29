/*  
소프트웨어의 연결부에서 가장 중요한 요소는 함수의 이름이다.
이름이 좋으면 함수의 구현 코드를 살펴 볼 필요 없이 호출문만 보고도 무슨 일을 하는지 파악할 수 있다.

좋은 이름을 떠올리는 데 효과적인 방법이 하나 있다. 바로 주석을 이용해 함수의 목적을 설명해보는 것이다.

함수의 매개변수도 마찬가지이다.

이름을 바꿀 때는 IDE 의 기능을 사용하자.
만약 직접 고칠 수 없는 외부 코드, 공개 API 일 떄는 마이그레이션 절차를 따른다.
마이그레이션 절차를 따르면 폐기 예정임을 알릴 수 있고 앞으로는 새 메서드를 사용하고 순차적으로 없앨 수 있다.
*/

export function circum(radius: number) {
    return 2 * Math.PI * radius
}


export class Book {
    private _reservations: string[] = []

    get reservations() {
        return this._reservations
    }

    addReservation(customer: string) {
        this._reservations.push(customer)
    }
}


interface Address {
    state: string
}


export interface aCustomer {
    address: Address
}

function inNewEngland(aCustomer: aCustomer) {
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state)
}

export function isInNewEnglandInSomeCustomers(someCustomers: aCustomer[]) {
    return someCustomers.filter(c => inNewEngland(c));
}