import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/components.module.css';

export default function NavigationBar() {
	return (
		<div className={styles.navBar}>
			<Link href={'/'} >
				<a><img src='https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg' alt='Background Image'/></a>
			</Link>
			<Link href={'/about'}>
				<a>About</a>
			</Link>
			<Link href={'/championship'}>
				<a>Championship</a>
			</Link>
			<Link href={'/game'}>
				<a>Game</a>
			</Link>
			<Link href={'/support'}>
				<a>Support</a>
			</Link>
		</div>
	);
}
