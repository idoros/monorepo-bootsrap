import React from 'react'
import { convertToUppercase } from '@monorepo/utils'
import { Button } from '@monorepo/components'
import { classes } from './header.st.css'

export const Header = ({ title }: { title: string }) => {

    return <header className={classes.root}>
        <Button label="header" />
        {convertToUppercase(title)}
    </header>
}