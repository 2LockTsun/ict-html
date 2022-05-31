import Link from "next/link";
import styles from "../styles/components/navigationBar.module.css"

export default function NavigationBar() {
    return (
        <div className={styles.container}>
            <Link href={'/'} className={styles.homeButton}><a>Home</a></Link>
            <nav className={styles.navBar}>
                <Link href={'/about'} className={styles.button}><a>About</a></Link>
                <Link href={'/about'} className={styles.button}><a>Content</a></Link>
                <Link href={'/about'} className={styles.button}><a>Support</a></Link>
            </nav>
        </div>
    )
}