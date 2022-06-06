import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Head from 'next/head';
import styles from '../../styles/pages/Championship.module.css';

export default function ChampionshipPage() {
	return (
		<div>
			<Head>
				<title>Championship - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<main>
				<div className={styles.content}>
					<div className={styles.grid}>
						<div className={styles.card}>
							<a href='/championship/seasons'>Seasons</a>
						</div>
						<div className={styles.card}>
							<a href='/championship/teams'>Teams</a>
						</div>
					</div>
					<div className={styles.grid}>
						<div className={styles.card}>
							<a href='/championship/drivers'>Drivers</a>
						</div>
						<div className={styles.card}>
							<a href='/championship/tracks'>Tracks</a>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
