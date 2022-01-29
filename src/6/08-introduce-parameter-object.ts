/* 
데이터 항목 여러개가 이 함수 저함수로 몰려다니는 경우를 자주 본다. 저자는 이런 데이터 무리를 발견하면 데이터 구조 하나로 모아주곤 한다.
저자는 이런 데이터 구조를 발견하면 이 데이터 구조를 활용하는 형태로 프로그램 동작을 재구성한다.
데이터 구조에 담길 데이터에 공통으로 적용되는 동작을 추출해 함수를 만들거나, 클래스를 만들 수 있다.
이 과정에서 새로 만든 데이터 구조가 문제 영역을 훨씬 간결하게 표현하는 새로운 개념으로 격상하면서 코드의 개념적 그림을 다시 그릴 수 있다.

장점:
    - 데이터 뭉치를 데이터 구조로 묶으면 데이터 사이의 관계가 명확해 진다.
    - 매개변수 개수가 줄어든다.
    - 같은 데이터 구조를 사용하는 모든 함수가 원소를 참조할 때 같은 이름을 사용하므로 일관성을 높여준다.
*/


interface Reading {
    temp: number
    time: string
}


interface Station {
    name: string
    readings: Array<Reading>
}


interface OperatingPlan {
    temperatureFloor: number
    temperatureCeiling: number
}



function readingsOutsideRange(station: Station, min: number, max: number) {
    return station.readings.filter(r => r.temp < min || r.temp > max)
}

export function callReadingOutsideRange() {
    const station: Station = {
        name: 'ZB1',
        readings: [
            {temp: 47, time: "2016-11-10 09:10"},
            {temp: 53, time: "2016-11-10 09:20"},
            {temp: 58, time: "2016-11-10 09:30"},
            {temp: 53, time: "2016-11-10 09:40"},
            {temp: 51, time: "2016-11-10 09:50"},
        ]
    }
    const operatingPlan: OperatingPlan = {
        temperatureFloor: 50,
        temperatureCeiling: 55
    }
    const alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)
    return alerts
}