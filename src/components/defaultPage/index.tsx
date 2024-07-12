import styles from './defaultPage.module.scss'
import { Outlet } from 'react-router-dom'
import stylesTema from 'styles/tema.module.scss'

export const DefaulPage = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={stylesTema.container} >
                <Outlet />
            </div>
        </>
    )
}