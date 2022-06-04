import NavigationBar from "../../components/navigationBar";
import Footer from "../../components/footer";
import Content from "../../components/content";
import F122Page from "./f122";
import F12021Page from "./f12021";
import F12020Page from "./f12020";
import CodeMasterPage from "./codemaster";

export default function GamePage() {
    return(
        <div>
            <NavigationBar />
            <Content components={['Codemaster', 'F1 22', 'F1 2021', 'F1 2020']}>
                <CodeMasterPage />
                <F122Page />
                <F12021Page />
                <F12020Page />
            </Content>
            <Footer />
        </div>
    )
}