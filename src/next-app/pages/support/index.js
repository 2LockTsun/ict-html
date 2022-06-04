import NavigationBar from "../../components/navigationBar";
import Footer from "../../components/footer";
import Content from "../../components/content";
import ContactUsPage from "./contactUs";
import SiteMapPage from "./siteMap";

export default function SupportPage() {
    return (
        <div>
            <NavigationBar  />
            <Content components={['Comtact Us', 'Site Map']}>
                <ContactUsPage />
                <SiteMapPage />
            </Content>
            <Footer />
        </div>
    )
}