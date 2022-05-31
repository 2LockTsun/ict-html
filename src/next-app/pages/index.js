import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavigationBar from '../components/navigationBar'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
    <div className={styles.container}>
        <Head>
            <title>My favourite sports</title>
            <meta name="description" content="A website for ICT homework" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationBar />

        <main className={styles.main}>
            <h1>
                Welcome to my Website!
            </h1>
            <div>
                <Link href={"/"}>GM</Link>
            </div>
            <div className={styles.grid}>
                <a className={styles.card}>Support</a>
            </div>
        </main>

        <footer className={styles.footer}>
            <p>
                Copyrights belongs to <a href='https://github.com/2LockTsun/ict-html'>2_Lock_Tsun</a>
            </p>
        </footer>
    </div>
    )
}
