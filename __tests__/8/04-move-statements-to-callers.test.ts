import {
  OutStream,
  Person,
  Photo,
  renderPerson,
  listRecentPhotos
} from '../../src/8/04-move-statements-to-callers'
import {expect, describe, it} from '@jest/globals'

describe('Test 08.03. Move Statements into Function', () => {
  it('renderPerson', async () => {
    const aPhoto = new Photo('title', 'location', 'src')
    const aPerson = new Person('name', aPhoto)
    const aOutStream = new OutStream('')
    renderPerson(aOutStream, aPerson)
    expect(aOutStream.toString()).toEqual(
      '<p>name</p>\n<img src=src />\n<br />\n<p>위치: location</p>\n<p>날짜: Mon Nov 13 2000</p>\n'
    )
  })

  it('listRecentPhotos', async () => {
    const aPhotos = [
      new Photo('title', 'location', 'src'),
      new Photo('title', 'location', 'src')
    ]
    const aOutStream = new OutStream('')
    listRecentPhotos(aOutStream, aPhotos)
    expect(aOutStream.toString()).toEqual(
      '<div>\n<p>위치: location</p>\n<p>날짜: Mon Nov 13 2000</p>\n</div>\n<div>\n<p>위치: location</p>\n<p>날짜: Mon Nov 13 2000</p>\n</div>\n'
    )
  })
})
