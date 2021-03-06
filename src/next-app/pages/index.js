import Footer from '../components/footer';
import Link from 'next/link';
import NavigationBar from '../components/navigationBar';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to my Website!</h1>

				<p className={styles.description}>
					This site is about my favourite sports.
				</p>

				<div className={styles.grid}>
					<Link href={'https://www.formula1.com'}>
						<a className={styles.card}>
							<h2>Go to F1 Official Site →</h2>
						</a>
					</Link>
				</div>
			</main>

			<div className={styles.subMain}>
				<h1>反Frameset大聯盟</h1>
				<Link href={'/troll'}>
					<a>立即加入</a>
				</Link>
			</div>

			<Footer />
		</div>
	);
}
