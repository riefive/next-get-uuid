import Head from 'next/head'
import { useState, useEffect } from 'react';
import { generateUuid } from './helper/helper.uuid'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [uuid, setUuid] = useState('');

  useEffect(() => {
    const fetchGetId = async () => {
      const rawUuid = await generateUuid();
      setUuid(rawUuid)
    }
    if (typeof window) {
      fetchGetId()
    }
  }, [])

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Generate UUID Sample</title>
        <meta name="description" content="GGenerate UUID sample application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          UUID Sample
        </h1>
        <div id="text">
          Your device id {uuid}
        </div>
      </main>
    </div>
  )
}
