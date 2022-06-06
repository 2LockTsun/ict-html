import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Head from 'next/head';
import styles from '../../styles/pages/Championship.module.css';
import { useState } from 'react';
import teams from './teams.json';
import Link from 'next/link';

export default function Teams() {
	const [Team, setTeam] = useState(0);
	const team = teams[Team];
	return (
		<div>
			<Head>
				<title>Teams - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<div className={styles.container}>
				<div className={styles.Nav}>
					<Link href={''}>
						<a onClick={() => setTeam(0)}>Red Bull Racing</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(1)}>Ferrari</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(2)}>Mercedes</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(3)}>McLaren</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(4)}>Alfa Romeo</a>
					</Link>
				</div>
				<div className={styles.Nav}>
					<Link href={''}>
						<a onClick={() => setTeam(5)}>Alpine</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(6)}>AlphaTauri</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(7)}>Hass</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(8)}>Astom Martin</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setTeam(9)}>Williams</a>
					</Link>
				</div>
				<div className={styles.team}>
					<img src={team.avatar} className={styles.teamAvatar} />
					<div className={styles.teamTable}>
						<div className={styles.teamTableRow}>
							<div className={styles.teamTableHead}>Team Name</div>
							<div className={styles.teamTableCell}>{team.name}</div>
						</div>
						<div className={styles.teamTableRow}>
							<div className={styles.teamTableHead}>Base Location</div>
							<div className={styles.teamTableCell}>{team.base}</div>
						</div>
						<div className={styles.teamTableRow}>
							<div className={styles.teamTableHead}>Team Cheif</div>
							<div className={styles.teamTableCell}>{team.teamCheif}</div>
						</div>
						<div className={styles.teamTableRow}>
							<div className={styles.teamTableHead}>Technical Cheif</div>
							<div className={styles.teamTableCell}>{team.techCheif}</div>
						</div>
						<div className={styles.teamTableRow}>
							<div className={styles.teamTableHead}>Chassis</div>
							<div className={styles.teamTableCell}>{team.chassis}</div>
						</div>
						<div className={styles.teamTableRow}>
							<div className={styles.teamTableHead}>Power Unit</div>
							<div className={styles.teamTableCell}>{team.pu}</div>
						</div>
						<div className={styles.teamTableRow}>
							<div className={styles.teamTableHead}>
								Number of World Championship
							</div>
							<div className={styles.teamTableCell}>{team.champ}</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
