import styles from '../../styles/pages/Support.module.css';
import Link from 'next/link';

export default function SiteMapPage() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>Site Map</h1>
			</div>
			<div className={styles.content}>
				<Link href={'/'}>
					<a>Home</a>
				</Link>
				<div className={styles.blank} />
				<Link href={'/about'}>
					<a>About</a>
				</Link>
				<li>Formula One</li>
				<li>Developer</li>
				<div className={styles.blank} />
				<Link href={'/championship'}>
					<a>Championship</a>
				</Link>
				<li>
					<Link href={'/championship/seasons'}>
						<a>Seasons</a>
					</Link>
				</li>
				<li>
					<Link href={'/championship/drivers'}>
						<a>Drivers</a>
					</Link>
				</li>
				<li>
					<Link href={'/championship/tracks'}>
						<a>Tracks</a>
					</Link>
				</li>
				<li>
					<Link href={'/championship/teams'}>
						<a>Teams</a>
					</Link>
				</li>
				<div className={styles.blank} />
				<Link href={'/game'}>
					<a>Game</a>
				</Link>
				<li>Codemaster</li>
				<li>F1 22</li>
				<li>F1 2021</li>
				<li>F1 2020</li>
				<div className={styles.blank} />
				<Link href={'/support'}>
					<a>Support</a>
				</Link>
				<li>Contact Us</li>
				<li>Site Map</li>
				<li>Credit</li>
			</div>
		</div>
	);
}
