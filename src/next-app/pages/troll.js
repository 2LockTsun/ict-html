import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function TrollPage() {
	return (
		<div className={styles.troll}>
			<h1>Welcome to the world without frameset.</h1>
			<h1>
				You will are not allow to{' '}
				<Link href={'/'}>
					<a>go back</a>
				</Link>{' '}
				anymore.
			</h1>
		</div>
	);
}
