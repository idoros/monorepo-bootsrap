import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@monorepo/components'
import { Header } from '@monorepo/views'
import { classes } from './theme.st.css'

const Demo = () => {

    return (
        <div>
            <Header title="..." />
            <Button label="tEst!!!???" />
            <input type="text" defaultValue="xxxx" style={{ marginTop: `50px` }} />
        </div>
    )
}

document.body.classList.add(classes.root)
const wrapper = document.createElement(`div`)
document.body.appendChild(wrapper)
ReactDOM.render(<Demo />, wrapper)
