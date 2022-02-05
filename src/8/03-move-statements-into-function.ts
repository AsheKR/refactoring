/*  
중복 제거는 코드를 건강하게 관리하는 가장 효과적인 방법 중 하나다. 호출이 아무리 많더라도 한 곳만 수정 하면 된다.
문장을 함수로 옮기려면 그 문장들이 피호출 함수의 일부라는 확신이 있어야 한다. 피호출 함수와 한 몸은 아니지만 여전히 함께 호출되어야 하는 경우라면
단순히 해당 문장들과 피호출 함수를 통째로 또 하나의 함수로 추출한다.
*/

function dateToday() {
  return new Date('2000-11-13')
}

export class Photo {
  private _location: string
  private _src: string
  private _date: Date
  private _title: string

  constructor(title: string, location: string, src: string) {
    this._title = title
    this._location = location
    this._src = src
    this._date = dateToday()
  }

  get title() {
    return this._title
  }
  get location() {
    return this._location
  }
  get src() {
    return this._src
  }
  toDateString() {
    return this._date.toDateString()
  }
}

export class Person {
  private _name: string
  private _photo: Photo
  constructor(name: string, photo: Photo) {
    this._name = name
    this._photo = photo
  }

  get name() {
    return this._name
  }
  get photo() {
    return this._photo
  }
}

export function renderPerson(outStream: string, person: Person) {
  const result = []
  result.push(`<p>${person.name}</p>`)
  result.push(renderPhoto(person.photo))
  result.push(`<p>제목: ${person.photo.title}</p>`)
  result.push(emitPhotoData(person.photo))
  return result.join('\n')
}

function photoDiv(p: Photo) {
  return ['div', `<p>제목: ${p.title}</p>`, emitPhotoData(p), '</div'].join(
    '\n'
  )
}

function emitPhotoData(aPhoto: Photo) {
  const result = []
  result.push(`<p>위치: ${aPhoto.location}</p>`)
  result.push(`<p>날짜: ${aPhoto.toDateString()}</p>`)
  return result.join('\n')
}

function renderPhoto(aPhoto: Photo) {
  const result = []
  result.push(`<img src=${aPhoto.src} />`)
  result.push('<br />')
  return result.join('\n')
}
