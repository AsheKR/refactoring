/* 
목적이 분명히 드러나는 이름의 짤막한 함수를 이용하기를 권한다.
하지만 때로는 함수 본문이 이름만큼 명확한 경우도 있다.
인라인 하는 경우
    - 쓸데없는 간접 호출 ( 이름만큼 명확한 경우 )
    - 리팩터링 과정에서 잘못 추출된 함수들 ( ?? )
    - 간접 호출을 과하게 쓰는 코드들 ( 위임하기만 하는 함수들이 많아서 위임관계가 복잡하게 얽힘 )

여기서 핵심은 항상 단계를 잘게 나눠서 처리하는 데 있다.
*/


interface aDriver{
    numberOfLateDeliveries: number
}


export function rating(aDriver: aDriver) {
    return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver: aDriver) {
    return aDriver.numberOfLateDeliveries > 5;
}

interface aCustomer{
    name: string
    location: string
}

export function reportLines(aCustomer: aCustomer) {
    const lines: [[string, string]?] = [];
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(out: [[string, string]?], aCustomer: aCustomer) {
    out.push(['name', aCustomer.name]);
    out.push(['location', aCustomer.location]);
}