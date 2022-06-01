import Link from 'next/link';
import styles from '../styles/components/navigationBar.module.css';

export default function NavigationBar() {
	return (
		<div className={styles.navBar}>
			<Link href={'/'} >
				<a>Home</a>
			</Link>
			<Link href={'/about'}>
				<a>About</a>
			</Link>
			<Link href={'/content'}>
				<a>Content</a>
			</Link>
			<Link href={'/support'}>
				<a>Support</a>
			</Link>
		</div>
	);
}
