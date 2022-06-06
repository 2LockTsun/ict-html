import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Head from 'next/head';
import styles from '../../styles/pages/Championship.module.css';
import { useState } from 'react';
import tracks from './tracks.json';
import { TableHead, TableRow, TableCell } from '@mui/material';
import Link from 'next/link';

export default function Tracks() {
    const [ Track, setTracks ] = useState(0);
	const track = tracks[Track];

	return (
		<div>
			<Head>
				<title>Tracks - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<div className={styles.container}>
                <div className={styles.Nav}>
                    <Link href={''}><a onClick={() => setTracks(0)}>Bahrain</a></Link>
					<Link href={''}><a onClick={() => setTracks(1)}>Saudi Arabia</a></Link>
					<Link href={''}><a onClick={() => setTracks(2)}>Australia</a></Link>
					<Link href={''}><a onClick={() => setTracks(3)}>Italy ( Imola )</a></Link>
					<Link href={''}><a onClick={() => setTracks(4)}>Miami</a></Link>
                </div>
				<div className={styles.Nav}>
                    <Link href={''}><a onClick={() => setTracks(5)}>Spain</a></Link>
					<Link href={''}><a onClick={() => setTracks(6)}>Monaco</a></Link>
					<Link href={''}><a onClick={() => setTracks(7)}>Azerbaijan</a></Link>
					<Link href={''}><a onClick={() => setTracks(8)}>Canada</a></Link>
					<Link href={''}><a onClick={() => setTracks(9)}>Great Britain</a></Link>
                </div>
				<div className={styles.Nav}>
                    <Link href={''}><a onClick={() => setTracks(10)}>Autria</a></Link>
					<Link href={''}><a onClick={() => setTracks(11)}>France</a></Link>
					<Link href={''}><a onClick={() => setTracks(12)}>Hungary</a></Link>
					<Link href={''}><a onClick={() => setTracks(13)}>Belgium</a></Link>
					<Link href={''}><a onClick={() => setTracks(14)}>Netherlands</a></Link>
					<Link href={''}><a onClick={() => setTracks(15)}>Italy ( Monza )</a></Link>
                </div>
				<div className={styles.Nav}>
					<Link href={''}><a onClick={() => setTracks(16)}>Singapore</a></Link>
					<Link href={''}><a onClick={() => setTracks(17)}>Japan</a></Link>
					<Link href={''}><a onClick={() => setTracks(18)}>United States</a></Link>
					<Link href={''}><a onClick={() => setTracks(19)}>Mexico</a></Link>
					<Link href={''}><a onClick={() => setTracks(20)}>Brazil</a></Link>
					<Link href={''}><a onClick={() => setTracks(21)}>Abu Dhabi</a></Link>
                </div>
				<div className={styles.track}>
					<h1>{track.name}</h1>
					<img src={track.map} />
					<div className={styles.trackRow}>
						<div className={styles.trackCell}>
							<div className={styles.trackItem}>Laps</div>
							<div className={styles.trackData}>{track.laps}</div>
						</div>
						<div className={styles.trackCell}>
							<div className={styles.trackItem}>Track Record</div>
							<div className={styles.trackData}>{track.record}</div>
						</div>
					</div>
					<div className={styles.trackRow}>
						<div className={styles.trackCell}>
							<div className={styles.trackItem}>Race Distance</div>
							<div className={styles.trackData}>{track.distance}</div>
						</div>
						<div className={styles.trackCell}>
							<div className={styles.trackItem}>Track Length</div>
							<div className={styles.trackData}>{track.length}</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
