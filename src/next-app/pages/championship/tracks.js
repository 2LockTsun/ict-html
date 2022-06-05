import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Head from 'next/head';
import styles from '../../styles/pages/Championship.module.css';
import { useState } from 'react';
import tracks from './tracks.json';
import { TableHead, TableRow, TableCell } from '@mui/material';
import Link from 'next/link';

export default function Tracks() {
    const [ Tracks, setTracks ] = useState(0)

	return (
		<div>
			<Head>
				<title>Tracks - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<div className={styles.container}>
                <div>
                    <Link href={''}><a onClick={() => setTeam(1)}>Ferrari</a></Link>
                </div>
			</div>
			<Footer />
		</div>
	);
}
