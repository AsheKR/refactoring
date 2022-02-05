/*  
좋은 소프트웨어의 설계의 핵심은 모듈화가 얼마나 잘 되어 있느냐를 뜻하는 모듈성이다.
모듈성이란 프로그램의 어딘가를 수정하려 할 때 해당 기능과 관련된 작은 일부분만 이해해도 가능하게 해주는 능력이다.
모듈성을 높이기 위해서는 서로 연관된 요소들을   함께 묶고, 요소 사이의 연결 관계를 쉽게 찾고 이해할 수 있도록 해야한다.

함수를 옮길지 말지를 결정하는 것은 쉽지 않다. 그럴 땐 대상 함수의 현재 컨텍스트와 후보 컨텍스트를 둘러보면 도움이 된다.
대상 함수를 호출하는 함수들은 무엇인지, 대상 함수가 호출하는 함수는 무엇이 있는지, 대상 함수가 사용하는 데이터는 무엇인지 살펴봐야 한다.
*/

interface Coordinate {
  lat: number
  lon: number
}

export function trackSummary(points: Coordinate[]) {
  const totalTime = calculateTime()
  const totalDistance = calculateDistance()
  const pace = totalTime / 60 / totalDistance
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  }

  function calculateDistance() {
    let result = 0
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i])
    }

    return result
  }
}

function distance(p1: Coordinate, p2: Coordinate) {
  const EARTH_RADIUS = 3659
  const dLat = radians(p2.lat) - radians(p1.lat)
  const dLon = radians(p2.lon) - radians(p1.lon)
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) +
    Math.cos(radians(p1.lat)) +
    Math.pow(Math.sin(dLon / 2), 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return EARTH_RADIUS * c
} // 두 지점의 거리 계산
function radians(degrees: number) {
  return (degrees * Math.PI) / 100
} // 라디안 값으로 변환
function calculateTime() {
  return 180
} // 총 시간 계산

// -----------------------------------------------------------------------------

export class Account {
  private _type: AccountType
  private _daysOverdrawn: number

  constructor(daysOverdrawn: number, isPremium: boolean) {
    this._type = new AccountType(isPremium)
    this._daysOverdrawn = daysOverdrawn
  }

  get type() {
    return this._type
  }
  get daysOverdrawn() {
    return this._daysOverdrawn
  }

  get bankCharge() {
    let result = 4.5
    if (this._daysOverdrawn > 0) result += this.overdraftCharge
    return result
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10
      if (this.daysOverdrawn <= 7) return baseCharge
      else return baseCharge + (this.daysOverdrawn - 7) * 0.85
    } else {
      return this.daysOverdrawn * 1.75
    }
  }
}

class AccountType {
  private _isPremium: any
  constructor(isPremium: boolean) {
    this._isPremium = isPremium
  }

  get isPremium() {
    return this._isPremium
  }
}
