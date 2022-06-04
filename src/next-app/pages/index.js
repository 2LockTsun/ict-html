import Head from 'next/head';
import Footer from '../components/footer';
import Link from 'next/link';
import NavigationBar from '../components/navigationBar';
import styles from '../styles/Home.module.css';

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

				<p className={styles.description}>This site is about my favourite sports.</p>

				<div className={styles.grid}>
					<Link href={'/about'}><a className={styles.card}><h2>Go to Formula1.com →</h2></a></Link>
				</div>
			</main>

			<div className={styles.subMain}>
				<h1 className={styles.title}>
					反Frameset大聯盟
				</h1>
			</div>

			<Footer />
		</div>
	);
}
