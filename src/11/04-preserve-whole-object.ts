/*  
하나의 레코드에서 값 두어 개를 가져와 인수를 넘기는 코드를 보면, 저자는 그 값들 대신 레코드를 통째로 넘기고 함수 본문에서 필요한 값들을 꺼내 쓰도록 수정한다.
하지만 함수가 레코드 자체에 의존하기를 원치 않을 때는 이 리팩터리응을 수행하지 않는다. 레코드와 함수가 서로 다른 모듈에 속한 경우가 특히 그렇다.

장점
    - 변화에 대응하기 쉽다. 예컨데 그함수가 더 다양한 데이터를 사용하도록 바뀌어도 매개변수 목록은 수정할 필요가 없다.
    - 매개변수 목록이 짧아져 그 함수 사용법을 더 이해하기 쉬워진다.

어떤 객체로부터 값 몇개를 얻은 후 그 값들로만 무언가를 할 때, 매개변수 객체 만들기 후 적용하곤 한다.
한 객체가 제공하는 기능 중 항상 똑같은 일부만을 사용하는 코드가 많다면, 그 기능만 따로 묶어 클래스로 추출하라는 신호일 수 있다.
많이 놓치는 사례가 하나 있는데, 다른 객체의 메서드를 호출하면서 호출하는 객체 자신이 가지고 있는 데이터를 여러개 건네는 경우다. 이 때 여러 데이터 대신 this 참조를 건낼 수 있다.
*/

class HeatingPlan {
    private _temperatureRange: any
    constructor(temperatureRange: any) {
        this._temperatureRange = temperatureRange
    }
    withinRange(bottom: number, top: number) {
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high)
    }
}

function clientA(aRoom: any) {
    const alerts = []
    const aPlan = new HeatingPlan({low: 30, high: 60})
    const low = aRoom.daysTempRange.low
    const high = aRoom.daysTempRange.high
    if (!aPlan.withinRange(low, high)) alerts.push('방 온도가 지정 범위를 벗어났습니다.')
}