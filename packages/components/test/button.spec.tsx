import { Button } from '../src/index'
import React from 'react'
import ReactServer from 'react-dom/server'
import { expect } from 'chai'

describe(`components outside`, () => {

    it(`should component render`, () => {
        const res = ReactServer.renderToString(
            <Button
                label="AbCd"
                className="testClass"
                style={{ color: `green` }}
            />
        )
        // this is just a placeholder for real tests.
        // some lazy none visual component test in node... 
        // components server/static rendering should test final result in browser (like the user)
        expect(res).to.match(/<button [^>]+><label [^>]+>ABCD/)
    })

})
