import styles from '../../styles/pages/Game.module.css';

export default function F12021Page() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>F1 2021</h1>
			</div>
			<div className={styles.content}>
				<iframe
					width='1120'
					height='630'
					src='https://www.youtube.com/embed/S985xPL9Xn0'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				/>
			</div>
		</div>
	);
}
