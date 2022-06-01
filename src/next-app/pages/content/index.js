import NavigationBar from "../../components/navigationBar";
import styles from "../../styles/Content.module.css"

export default function ContentPage() {
    return(
        <div>
            <NavigationBar />
            
            <footer className={styles.footer}>
                Copyrights belongs to :
                <span ><a href='https://github.com/2LockTsun/ict-html'>2_Lock_Tsun</a></span>
				
			</footer>
        </div>
    )
}