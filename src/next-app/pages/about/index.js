import NavigationBar from "../../components/navigationBar";
import Footer from '../../components/footer';
import Content from "../../components/content";
import DeveloperPage from './developer';
import ThisSitePage from "./thisSite";

export default function About() {
    return (
        <div id="About">
            <NavigationBar  />
            <Content components={['This Site', 'Developer']}>
                <ThisSitePage />
                <DeveloperPage />
            </Content>
            <Footer />
        </div>
    )
}