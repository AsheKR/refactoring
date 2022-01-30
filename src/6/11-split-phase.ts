/* 
저자는 서로 다른 두 대상을 한꺼번에 다루는 코드를 발견하면 각각을 별개의 모듈로 나누는 방법을 모색한다.
이렇게 분리하는 가장 간편한 방법은 하나의 동작을 연이은 단계로 쪼개는 것이다.

장점:
    - 코드를 수정해야할 때 두 대상을 동시에 생각할 필요 없이 하나에만 집중하기 위해서다.
*/


interface ProductInterface {
    basePrice: number
    discountThreshold: number
    discountRate: number
}

interface ShippingMethodInterface {
    discountThreshold: number
    discountFee: number
    feePerCase: number
}
 
export function priceOrder(product: ProductInterface, quantity: number, shippingMethod: ShippingMethodInterface)  {
    const basePrice = product.basePrice * quantity
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee : shippingMethod.feePerCase)
    const shippingCost = quantity * shippingPerCase
    const price = basePrice - discount + shippingCost
    return price
}