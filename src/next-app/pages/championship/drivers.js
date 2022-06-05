import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Content from '../../components/content';
import Head from 'next/head';

export default function Drivers() {
	return (
		<div>
			<Head>
				<title>Drivers - My favourite sports</title>
				<meta name='description' content='A website for ICT homework' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavigationBar />

			<Footer />
		</div>
	);
}
