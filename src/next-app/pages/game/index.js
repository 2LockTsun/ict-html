import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Content from '../../components/content';
import F122Page from './f122';
import F12021Page from './f12021';
import F12020Page from './f12020';
import CodeMasterPage from './codemaster';
import Head from 'next/head';

export default function GamePage() {
	return (
		<div>
			<Head>
				<title>Game - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />
			<Content components={['Codemasters', 'F1 22', 'F1 2021', 'F1 2020']}>
				<CodeMasterPage />
				<F122Page />
				<F12021Page />
				<F12020Page />
			</Content>
			<Footer />
		</div>
	);
}
