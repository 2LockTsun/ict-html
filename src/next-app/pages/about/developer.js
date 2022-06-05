import styles from '../../styles/pages/About.module.css';
import Link from 'next/link';

export default function DeveloperPage() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>Developer</h1>
			</div>
			<div className={styles.content}>
				<h2>
					Programmer :{' '}
					<Link href={'https://github.com/2LockTsun'}>
						<a>2_Lock_Tsun</a>
					</Link>
				</h2>
				<p>A newbie programmer who just start programming for two years.</p>
				<p>No more description is needed fo myself.</p>
			</div>
		</div>
	);
}
