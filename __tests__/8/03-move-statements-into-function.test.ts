import {Person, Photo, renderPerson} from '../../src/8/03-move-statements-into-function'
import {expect, describe, it} from '@jest/globals'


describe('Test 08.03. Move Statements into Function', () => {
    it('renderPerson', async () => {
        const aPhoto = new Photo('title', 'location', 'src')
        const aPerson = new Person('name', aPhoto)
        expect(renderPerson('', aPerson)).toEqual('<p>name</p>\n<img src=src />\n<br />\n<p>제목: title</p>\n<p>위치: location</p>\n<p>날짜: Mon Nov 13 2000</p>')
    })

})