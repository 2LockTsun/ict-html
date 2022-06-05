import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Head from 'next/head';
import styles from '../../styles/pages/Championship.module.css';
import { useState } from 'react';
import seasons from './seasons.json';
import { TableHead, TableRow, TableCell, Table, TableBody } from '@mui/material';
import Link from 'next/link';

export default function Seasons() {
	const [Season, setSeason] = useState(0);
	const [Type, setType] = useState(0);

	const table = seasons.map((season) => {
		return [
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Circuit</TableCell>
						<TableCell>Driver</TableCell>
						<TableCell>Team</TableCell>
						<TableCell>Laps</TableCell>
						<TableCell>Time</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{season.races.map((race) => {
						return (
							<TableRow key={race.circuit}>
								<TableCell>{race.circuit}</TableCell>
								<TableCell>{race.driver}</TableCell>
								<TableCell>{race.team}</TableCell>
								<TableCell>{race.laps}</TableCell>
								<TableCell>{race.time}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>,
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Position</TableCell>
						<TableCell>Driver</TableCell>
						<TableCell>Team</TableCell>
						<TableCell>Points</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{season.drivers.map((driver) => {
						return (
							<TableRow key={driver.post}>
								<TableCell>{driver.post}</TableCell>
								<TableCell>{driver.driver}</TableCell>
								<TableCell>{driver.team}</TableCell>
								<TableCell>{driver.points}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>,
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Position</TableCell>
						<TableCell>Team</TableCell>
						<TableCell>Points</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{season.teams.map((team) => {
						return (
							<TableRow>
								<TableCell>{team.post}</TableCell>
								<TableCell>{team.team}</TableCell>
								<TableCell>{team.points}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>,
		];
	});

	return (
		<div>
			<Head>
				<title>Seasons - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<div className={styles.container}>
				<div className={styles.Nav}>
					<Link href={''}>
						<a onClick={() => setSeason(0)}>2021</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setSeason(1)}>2022</a>
					</Link>
				</div>
				<div className={styles.Nav}>
					<Link href={''}>
						<a onClick={() => setType(0)}>Races</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setType(1)}>Drivers</a>
					</Link>
					<Link href={''}>
						<a onClick={() => setType(2)}>Drivers</a>
					</Link>
				</div>
				<div className={styles.table}>{table[Season][Type]}</div>
			</div>
			<Footer />
		</div>
	);
}
