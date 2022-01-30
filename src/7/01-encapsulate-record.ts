/* 
레코드는 연관된 여러 데이터를 직관적인 방식으로 묶을 수 있어서 각각을 따로 취급할 때보다 훨씬 의미 있는 단위로 전달할 수 있게 해준다.
하지만 단순 레코드에는 단점이 있다. 특히, 계산해서 얻을 수 있는 값과 그렇지 않은 값을 명확히 구분해 저장해야 하는 점이 번거롭다.
때문에 저자는 가변 데이터를 저장하는 용도로는 레코드보다 객체를 선호하는 편이다.

장점
    - 어떻게 저장했는지를 숨긴 채 값을 메서드로 제공할 수 있다.
    - 무엇이 저장된 값이고 무엇이 계산된 값인지 알 필요가 없다.
    - 기존 이름을 새 이름으로 마이그레이션 하기 쉽다.

레코드의 구조
    - 필드 이름을 노출하는 형태
    - 필드를 외부로부터 숨겨서 내가 원하는 이름을 쓸 수 있는 형태
        - 주로 언어의 해시맵을 만들어주는 문법을 사용하여 제공한다.
        - 필드를 명확히 알려주지 않는다는 게 단점이 될 수 있다.
            - 사용하는 범위가 넓을 수록 불분명한 레코드 생성, 사용하는 곳을 직접 봐야 이해할 수 있다.
                - 리팩터링 할 때 불투명한 레코드를 사용하는 것보다 클래스를 사용하는 편이 낫다.
*/

const organization = {name: '애크미 구스베리', country: 'GB'}

export function getOrganization() {
    return organization
}


export function getResult() {
    return `<h1>${organization.name}</h1>`
}

export function setOrganizationName(newName: string)  {
    organization.name = newName
}

// -----------------------------------------------------------------------------

export const customerData: any = {
    '1920': {
        name: '마틴 파울러',
        id: '1920',
        usages: {
            '2016': {
                '1': 50,
                '2': 55
            },
            '2015': {
                '1': 70,
                '2': 63
            }
        }
    },
    '38673': {
        name: '닐 포드',
        id: '38673',
        usages: {
            '2016': {
                '1': 50,
                '2': 55
            },
            '2015': {
                '1': 70,
                '2': 63
            }
        }
    },
}

export function somethingMethod(customerID: number, year: number, month: number, amount: number) {
    customerData[customerID].usages[year][month] = amount
}

export function compareUsage(customerID: number, laterYear: number, month: number) {
    const later = customerData[customerID].usages[laterYear][month]
    const earlier = customerData[customerID].usages[laterYear - 1][month]
    return {laterAmount: later, change: later - earlier}
}