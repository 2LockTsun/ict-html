import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import drivers from './drivers.json';
import Head from 'next/head';
import styles from '../../styles/pages/Championship.module.css'
import Link from 'next/link';
import { useState } from 'react';

export default function Drivers() {
	const [ Driver, setDriver ] = useState(0);
	const driver = drivers[Driver]
	return (
		<div>
			<Head>
				<title>Drivers - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<div className={styles.vertContainer}>
				<div className={styles.vertNav}>
					{drivers.map(driver => {return(
						<Link href={''}><a onClick={() => setDriver(drivers.indexOf(driver))}>{driver.name}</a></Link>
					)})}
				</div>
				<div className={styles.driver}>
					<img src={driver.avatar} className={styles.teamAvatar} />
					<h1>{driver.no}{" "}{driver.name}</h1>
					<div className={styles.teamTableRow}>
						<div className={styles.teamTableHead}>Team</div>
						<div className={styles.teamTableCell}>{driver.team}</div>
					</div>
					<div className={styles.teamTableRow}>
						<div className={styles.teamTableHead}>Country</div>
						<div className={styles.teamTableCell}>{driver.country}</div>
					</div>
					<div className={styles.teamTableRow}>
						<div className={styles.teamTableHead}>Date of Birth</div>
						<div className={styles.teamTableCell}>{driver.birthday}</div>
					</div>
					<div className={styles.teamTableRow}>
						<div className={styles.teamTableHead}>Place of Birth</div>
						<div className={styles.teamTableCell}>{driver.birthplace}</div>
					</div>
					<div className={styles.teamTableRow}>
						<div className={styles.teamTableHead}>Number of Driver Championship</div>
						<div className={styles.teamTableCell}>{driver.champ}</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
