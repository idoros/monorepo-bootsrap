import React from 'react'
import { convertToUppercase, CompPropsBase } from '@monorepo/utils'
import { style as st, classes } from './button.st.css'

export type ButtonProps = CompPropsBase & {
    label: string
}

export const Button = ({ label, className, style }: ButtonProps) => {

    return (
        <button className={st(classes.root, className)} style={style}>
            <label className={classes.label}>{convertToUppercase(label)}</label>
        </button>
    )
}
