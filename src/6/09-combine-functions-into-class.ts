/* 
클래스는 데이터와 함수를 하나의 공유 환경으로 묶은 후, 다른 프로그램 요소와 어우러질 수 있도록 그중 일부를 외부에 제공한다.
장점:
    - 함수들이 공유하는 공통 환경을 더 명확하게 표현한다.
    - 각 함수에 전달되는 인수를 줄여 객체 안의 호출을 간결하게 만들 수 있다.
    - 이런 객체를 시스템의 다른 부분에 전달하기 위한 참조를 제공할 수 있다.
    - 변환 함수로 묶는 것보다 두드러진 장점은 클라이언트가 객체의 핵심 데이터를 변경할 수 있고, 파생 객체를 일관되게 관리할 수 있다는 것이다.
*/

interface ReadingInterface {
  customer: string
  quantity: number
  month: number
  year: number
}

function aquireReading() {
  return Object.assign(
    {},
    {
      customer: 'ivan',
      quantity: 10,
      month: 5,
      year: 2017
    }
  )
}

function taxThreshold(year: number) {
  return year
}

function baseRate(month: number, year: number) {
  return year
}

export function clientA() {
  const aReading = aquireReading()
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
  return baseCharge
}

export function clientB() {
  const aReading = aquireReading()
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))
  return taxableCharge
}

export function clientC() {
  const aReading = aquireReading()
  const baseChargeAmount = calculateBaseCharge(aReading)

  function calculateBaseCharge(aReading: ReadingInterface) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
  }

  return baseChargeAmount
}
