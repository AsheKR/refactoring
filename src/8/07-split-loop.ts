/*  
종종 반복문 하나에서 두 가지 일을 수행하는 모습을 보게 된다. 그저 두 일을 한꺼번에 처리할 수 있다는 이유에서 말이다. 하지만 이렇게 하면 반복문을
수정해야 할 때 두가지 일 모두를 잘 이해하고 진행해야 한다. 반대로 각각의 반복문으로 분리해두면 수정할 동작 하나만 이해하면 된다.
*/


export function clientA() {
    const people = [
        {age: 15, salary: 1000},
        {age: 13, salary: 900},
        {age: 20, salary: 800},
        {age: 21, salary: 700},
    ]
    let youngest = people[0] ? people[0].age : Infinity
    let totalSalary = 0
    for (const p of people) {
        if (p.age < youngest) youngest = p.age
        totalSalary += p.salary
    }

    return `최연소: ${youngest}, 총 급여 ${totalSalary}`
}