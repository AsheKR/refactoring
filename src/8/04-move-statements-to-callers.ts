/*  
함수는 프로그래머가 쌓아 올리는 추상화의 기본 빌딩 블록이다. 추상화의 경계를 긋기는 항상 올바르지 않고 기능 범위가 달라지면 추상화의 경계도 움직이게 된다.
함수관점에서 생각해보면 초기에는 응집도 높고 한 가지 일만 수행하던 함수가 어느 새 둘 이상의 다른 일을 수행하게 바뀔 수 있다는 ㄱㅅ이다.

예컨데 여러 곳에서 사용하던 기능이 일부 호출자에게는 다르게 동작하도록 바뀌어야 한다면 이런 일이 벌어진다.
그렇다면 개발자는 달라진 동작을 함수에서 꺼내 해당 호출자로 옮겨야 한다.
*/

function dateToday() {
  return new Date('2000-11-13')
}

function recentDateCutOff() {
  return new Date('2000-10-13')
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
  get date() {
    return this._date
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

export class OutStream {
  private _content: string
  constructor(content: string) {
    this._content = content
  }

  write(content: string) {
    this._content = this._content.concat(content)
  }
  toString() {
    return this._content
  }
}

export function renderPerson(outStream: OutStream, person: Person) {
  outStream.write(`<p>${person.name}</p>\n`)
  renderPhoto(outStream, person.photo)
  emitPhotoData(outStream, person.photo)
}

export function listRecentPhotos(outStream: OutStream, photos: Photo[]) {
  photos
    .filter(p => p.date > recentDateCutOff())
    .forEach(p => {
      outStream.write('<div>\n')
      emitPhotoData(outStream, p)
      outStream.write('</div>\n')
    })
}

function emitPhotoData(outStream: OutStream, aPhoto: Photo) {
  outStream.write(`<p>위치: ${aPhoto.location}</p>\n`)
  outStream.write(`<p>날짜: ${aPhoto.toDateString()}</p>\n`)
}

function renderPhoto(outStream: OutStream, aPhoto: Photo) {
  outStream.write(`<img src=${aPhoto.src} />\n`)
  outStream.write('<br />\n')
}
