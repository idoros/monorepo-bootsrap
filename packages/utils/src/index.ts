import { CSSProperties } from 'react'
export const convertToUppercase = (str: string) => str.toUpperCase()

export type CompPropsBase = {
    className?: string
    style?: CSSProperties
}
