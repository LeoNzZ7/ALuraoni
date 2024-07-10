import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import styles from "./menu.module.scss"

export const Menu = () => {
    const rotas = [{
        label: "início",
        to: '/',
    }, {
        label: "Cardápio",
        to: '/cardapio',
    }, {
        label: "Sobre",
        to: '/sobre',
    }];

    return (
        <nav className={styles.menu}>
            <Logo />
            <ul className={styles.menu__list} >
                {rotas.map((rota, index) => (
                    <li className={styles.menu__link} key={index}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}