import Head from 'next/head';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import { CompletedChanlleges } from '../components/CompletedChanlleges';
import { CountDown } from '../components/CountDown';

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChanlleges />
            <CountDown />
          </div>
          <div>

          </div>
        </section>
    </div>
  )
}
