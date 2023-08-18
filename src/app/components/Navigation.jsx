import Link from "next/link";
import styles from './Navigation.module.css'


const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'Favorites',
    route: '/favorites'
}];


export function Navigation() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.navigation}>
                {links.map((link) => {
                    return <li key={link.label} className={styles.li}>
                        <Link href={link.route}
                        className={styles.anchor}>
                            {link.label}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}