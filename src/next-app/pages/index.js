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
				<h1>Welcome to my Website!</h1>

				<div className={styles.grid}>
					<Link href={'/support'}><a className={styles.card}><h2>Support</h2></a></Link>
				</div>
			</main>

			<Footer />
		</div>
	);
}
