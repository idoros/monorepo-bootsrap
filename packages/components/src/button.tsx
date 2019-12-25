import React from 'react'
import { convertToUppercase } from '@monorepo/utils'
import { classes } from './button.st.css'

export const Button = ({ label }: { label: string }) => {

    return (
        <button className={classes.root}>
            <label className={classes.label}>{convertToUppercase(label)}</label>
        </button>
    )
}
