/* 
두 함수의 로직이 비슷하고 단지 리터럴 값만 다르다면, 그 다른 값만 매개변수로 받아 처리하는 함수 하나로 합쳐서 중복을 없앨 수 있다.
*/


function tenPersentRaise(aPerson: any) {
    aPerson.salary = aPerson.salary.multiply(1.1)
}

function fivePersentRaise(aPerson: any) {
    aPerson.salary = aPerson.salary.multiply(1.05)
}

// -----------------------------------------------------------------------------

function usd(amount: number) {
    return amount
}

export function baseCharge(usage: number) {
    if (usage < 0) return usd(0)
    const amount = bottomBand(usage) * 0.03
        + middleBand(usage) * 0.05
        + topBand(usage) * 0.07

    return usd(amount)
}

function bottomBand(usage: number) {
    return Math.min(usage, 100)
}

function middleBand(usage: number)  {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0
}

function topBand(usage: number) {
    return usage > 200 ? usage - 200 : 0
}