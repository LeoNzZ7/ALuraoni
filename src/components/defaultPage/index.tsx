import React, { ReactNode } from 'react'
import styles from './defaultPage.module.scss'
import { Outlet } from 'react-router-dom'
import stylesTema from 'styles/tema.module.scss'

export const DefaulPage = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={stylesTema.container} >
                <Outlet />
                {children}
            </div>
        </>
    )
}