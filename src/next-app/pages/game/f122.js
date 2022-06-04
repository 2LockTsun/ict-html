import styles from '../../styles/pages/Game.module.css'

export default function F122Page() {
    return(
        <div>
            <div className={styles.content}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YgOi41qmlc4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />  
            </div>
        </div>
    )
}