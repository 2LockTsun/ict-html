import NavigationBar from "../../components/navigationBar";
import Footer from "../../components/footer";
import Content from "../../components/content";
import F122Page from "./f122";
import F12021Page from "./f12021";
import F12020Page from "./f12020";
import CodeMasterPage from "./codemaster";
import Header from "../../components/Header";

export default function GamePage() {
    return(
        <div>
            <Header>Game - My favourite sports</Header>
            <NavigationBar />
            <Content components={['Codemaster', 'F1 22', 'F1 2021']}>
                <CodeMasterPage />
                <F122Page />
                <F12021Page />
            </Content>
            <Footer />
        </div>
    )
}