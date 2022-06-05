import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import Content from '../../components/content';
import Head from 'next/head';

export default function ChampionshipPage() {
	return (
		<div>
			<Head>
                <title>Championship - My favourite sports</title>
			    <meta name='description' content='A website for ICT homework' />
			    <link rel='icon' href='/favicon.ico' />
            </Head>
			<NavigationBar />
			<main>
				<div>
					<a href='/championship/seasons'>nothing</a>
				</div>
			</main>
			<Footer />
		</div>
	);
}
