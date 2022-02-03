/* 
플래그 인수란 호출되는 함수가 실행할 로직을 호출하는 쪽에서 선택하기 위해 전달하는 인수다.

플래그 인수를 싫어하는 이유
    - 호출할 수 있는 함수들이 무엇이고 어떻게 호출해야하는지 이해하기 어려워진다.
        - 함수 목록으로 살펴볼 때 플래그 인수가 있으면 함수들의 기능 차이가 잘 드러나지 않는다.
    - 사용할 함수를 선택한 후에도 플래그 인수로 어떤 값을 넘겨야 하는지를 알아내야 한다.
    - 불리언 플래그 코드를 읽는 이에게 뜻을 온전히 전달하지 못하기 때문에 더욱 좋지 못하다. 함수에 전달한 true 의 의미는 무엇인가?
*/

function bookConcert(aCustomer: any, isPremium: boolean)  {
    if (isPremium) {
        // 프리밍엄 예약용 로직
    } else {
        // 일반 예약용 로직
    }
}

// -----------------------------------------------------------------------------

interface OrderInterface {
    deliveryState: string
    placedOn: any
}

function deliveryDate(anOrder: OrderInterface, isRush: boolean) {
    if (isRush) {
        let deliveryTime
        if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1
        else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2
        else deliveryTime = 3
        return anOrder.placedOn.plusDays(1 + deliveryTime)
    } else {
        let deliveryTime
        if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2
        else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3
        else deliveryTime = 4
        return anOrder.placedOn.plusDays(2 + deliveryTime)
    }
}

export function clientA() {
    const anOrder: OrderInterface = {deliveryState: 'MA', placedOn: {plusDays: (arg: number) => { return arg }}}
    return deliveryDate(anOrder, true)
}

export function clientB() {
    const anOrder: OrderInterface = {deliveryState: 'MA', placedOn: {plusDays: (arg: number) => { return arg }}}
    return deliveryDate(anOrder, false)
}