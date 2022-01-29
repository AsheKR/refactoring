/* 
코드를 언제 독립된 함수로 묶어야 하나?
- 목적과 구현을 분리해야할 때
    - 코드를 보고 무슨 일을 하는지 파악하는 데 한참이 걸릴 때 
    - 경험상 대여섯줄을 넘어갈 때부터 슬슬 냄새를 풍긴다.
- 장점
    - 함수의 목적이 한눈에 확들어오고 본문 코드에 대해서 더이상 신경쓸 일 없다.

성능과 관련해서는 앞에서 이야기했듯 우선 수정하기 쉬운 구조를 만들고, 성능을 수정하면 된다.

- 특징
    - 중첩 함수로 추출하기
        - 아무것도 안해도 되는 가장 간단한 방법
    - 모듈로 추출하기
        - 지역변수를 매개변수로 넘긴다.
        - 지역변수에 값을 대입하게 되면
            - 변수가 추출된 코드 안에서만 사용된다면 문장 슬라이드를 활용하여 한 곳에 모아 처리한다.
            - 특이한 경우는 변수가 추출된 함수 밖에서 사용될 때인데, 이럴 때는 대입된 새 값을 반환한다.
        - 반환할 값이 여러개라면
            - 각각을 반환하는 함수 여러개로 만든다.
*/


interface Order {
    amount: number
}


export interface Invoice {
    customer: string
    orders: [Order]
    dueDate?: Date
}


class Clock {
    static get today() {
        return new Date()
    }
}

export function printOwing(invoice: Invoice) {
    let outstanding = 0

    console.log('*****************')
    console.log('**** 고객 채무 ****')
    console.log('*****************')

    for (const o of invoice.orders) {
        outstanding += o.amount
    }

    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}