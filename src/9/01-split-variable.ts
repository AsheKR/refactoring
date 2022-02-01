/*  
대입이 두 번 이상 이뤄진다면 여러 가지 역할을 수행한다는 신호다.
역할이 둘 이상인 변수가 있다면 쪼개야 한다. 예외는 없다. 역할 하나 당 변수 하나다.
여러 용도로 쓰인 변수는 코드를 읽는 이에게 커다란 혼란을 주기 때문이다.
*/


interface Scenario {
    primaryForce: number
    secondaryForce: number
    mass: number
    delay: number
}


export function distanceTravelled(scenario: Scenario, time: number) {
    let result
    let acc = scenario.primaryForce / scenario.mass  // 가속도(a) = 힘(F) / 질량(m)
    let primaryTime = Math.min(time, scenario.delay)
    result = 0.5 * acc * primaryTime * primaryTime  // 전파된 거리
    let secondaryTime = time - scenario.delay
    if (secondaryTime > 0) {
        let primaryVelocity = acc * scenario.delay
        acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass
        result += primaryVelocity * secondaryTime * 0.5 * acc * secondaryTime * secondaryTime
    }
    return result
}