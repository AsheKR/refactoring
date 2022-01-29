/* 
변수는 프로그래머가 하려는 일에 관해 많은 것을 설명해준다. 단, 이름을 잘 지었을 때만 그렇다.
특히 이름의 중요성은 그 사용범위에 영향을 많이 받는다. 
함수 호출 한번으로 끝나지 않고 영속되는 필드라면 이름에 더 신경써야 한다.
저자가 가장 신중하게 이름 짓는 대상이 바로 이런 필드이다.
*/


interface Obj{
    articleTitle: string
}

let tpHd = "untitled";

function getResult() {
    return `<h1>${tpHd}</h1>`
}

function setTpHd(obj: Obj)  {
    tpHd = obj.articleTitle
}

const cpNm = '애크미 구스베리'