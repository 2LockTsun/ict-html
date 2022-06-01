import NavigationBar from "../../components/navigationBar";
import styles from "../../styles/Support.module.css"

export default function SupportPage() {
    return (
        <div>
            <NavigationBar  />
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YgOi41qmlc4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <footer className={styles.footer}>
                Copyrights belongs to :
                <span ><a href='https://github.com/2LockTsun/ict-html'>2_Lock_Tsun</a></span>
				
			</footer>
        </div>
    )
}