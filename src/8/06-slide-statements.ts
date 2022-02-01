/*  
관련된 코드들이 가까이 모여있다면 이해하기가 더 쉽다. 예컨대 하나의 데이터 구조를 이용하는 문장들은 흩어져있기보다는 한데 모여있어야 좋다.
저자는 실제로 문장 슬라이드 리팩터링을 통해 이런 코드들을 모아준다.

관련 코드끼리 모으는 작업은 다른 리팩터링의 준비 단계로 자주 행해진다. 
관련 있는 코드들을 명확히 구분되는 함수로 추출하는 게 그저 문장을 한데로 모으는 것보다 나은 방법이다.

코드 조각을 슬라이드 할 때 두가지를 확인해야 한다.
    - 무엇을 슬라이드 할지
    - 슬라이드 할 수 있는지 여부
*/

export function clientA() {
    const pricingPlan = retrievePricingPlan()
    const order = retrieveOrder()
    const baseCharge = pricingPlan.base
    let charge
    const chargePerUnit = pricingPlan.unit
    const units = order.units
    let discount
    charge = baseCharge + units * chargePerUnit
    let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0)
    discount = discountableUnits * pricingPlan.discountFactor
    if (order.isRepeat) discount += 20
    charge = charge - discount
    chargeOrder(charge)
    return charge
}



function retrievePricingPlan() {
    return {
        base: 5000,
        unit: 5,
        discountThreshold: 30,
        discountFactor: 5
    }
}


function retrieveOrder()  {
    return {
        units: 5,
        isRepeat: true,
    }
}

function chargeOrder(charge: number) {
    charge
}