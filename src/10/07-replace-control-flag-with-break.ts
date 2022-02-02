/* 
제어 플래그란 코드의 동작을 변경하는 데 사용되는 변수를 말하며, 어딘가에서 값을 계산해 제어 플래그에 설정한 후 다른 어딘가의 조건문에서 검사하는 형태로 쓰인다.
return 문이 하나일 필요가 없다고 저자는 주장한다.
*/

function sendAlert()  {}

function findPeople(people: string[]) {
    let found = false
    for (const p of people) {
        if (!found) {
            if (p === '조커') {
                sendAlert()
                found = true
            }
            if (p === '사루만') {
                sendAlert()
                found = true
            }
        }
    }
}
