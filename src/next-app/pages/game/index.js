import NavigationBar from "../../components/navigationBar";
import Footer from "../../components/footer";
import Content from "../../components/content";
import F122Page from "./f122";
import F12021Page from "./f12021";
import CodeMasterPage from "./codemaster";
import Head from "next/head";

export default function GamePage() {
    return(
        <div>
            <Head>
                <title>Game - My favourite sports</title>
			    <meta name='description' content='A website for ICT homework' />
			    <link rel='icon' href='/favicon.ico' />
            </Head>
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