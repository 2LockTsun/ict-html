import NavigationBar from "../../components/navigationBar";
import Footer from '../../components/footer';
import Content from "../../components/content";
import DeveloperPage from './developer';
import FormulaOnePage from "./formulaOne";

export default function About() {
    return (
        <div id="About">
            <NavigationBar  />
            <Content components={['Formula One', 'Developer']}>
                <FormulaOnePage />
                <DeveloperPage />
            </Content>
            <Footer />
        </div>
    )
}