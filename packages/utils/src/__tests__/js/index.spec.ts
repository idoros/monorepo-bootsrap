import { convertToUppercase } from '../../index'
import { expect } from 'chai'

describe(`utils`, () => {

    it(`should test util`, () => {
        expect(convertToUppercase(`aBcD`)).to.equal(`ABCD`)
    })

})
