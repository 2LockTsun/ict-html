import NavigationBar from "../../components/navigationBar";
import Footer from "../../components/footer";
import styles from "../../styles/pages/Support.module.css";
import Content from "../../components/content";

export default function SupportPage() {
    return (
        <div>
            <NavigationBar  />
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
            <Footer />
        </div>
    )
}