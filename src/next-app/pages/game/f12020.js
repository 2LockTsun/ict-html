import styles from '../../styles/pages/Game.module.css';

export default function F12020Page() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>F1 2020</h1>
			</div>
			<div className={styles.content}>
                <iframe
                    width="1120"
                    height="630"
                    src="https://www.youtube.com/embed/lfbq4qkoenY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
			</div>
		</div>
	);
}