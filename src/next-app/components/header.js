import Head from "next/head";

export default function Header({children}) {
    return(
        <Head>
            <title>{children}</title>
			<meta name='description' content='A website for ICT homework' />
			<link rel='icon' href='/favicon.ico' />
        </Head>
    )
}