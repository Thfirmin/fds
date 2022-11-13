import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <tittle>Profile Selection</tittle>
                <meta name="description" content="Selection profile page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Who are you?                    
                </h1>
                <div className={styles.grid}>
                    <div className={styles.title}
                </div>
            </main>
        </div>
    )
}