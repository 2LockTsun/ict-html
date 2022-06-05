import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Content from '../../components/content';
import ContactUsPage from './contactUs';
import SiteMapPage from './siteMap';
import Head from 'next/head';
import CreditPage from './credit';

export default function SupportPage() {
	return (
		<div>
			<Head>
				<title>Support - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<Content components={['Comtact Us', 'Site Map', 'Credit']}>
				<ContactUsPage />
				<SiteMapPage />
				<CreditPage />
			</Content>
			<Footer />
		</div>
	);
}
