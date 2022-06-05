import NavigationBar from "../../components/navigationBar";
import Footer from '../../components/footer';
import Content from "../../components/content";
import DeveloperPage from './developer';
import FormulaOnePage from "./formulaOne";
import Header from "../../components/Header";

export default function About() {
    return (
        <div>
            <Header>About - My favourite sports</Header>
            <NavigationBar  />
            <Content components={['Formula One', 'Developer']}>
                <FormulaOnePage />
                <DeveloperPage />
            </Content>
            <Footer />
        </div>
    )
}