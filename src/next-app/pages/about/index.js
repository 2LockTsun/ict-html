import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Content from '../../components/content';
import DeveloperPage from './developer';
import FormulaOnePage from './formulaOne';
import Head from 'next/head';

export default function About() {
	return (
		<div>
			<Head>
				<title>About - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<Content components={['Formula One', 'Developer']}>
				<FormulaOnePage />
				<DeveloperPage />
			</Content>
			<Footer />
		</div>
	);
}
