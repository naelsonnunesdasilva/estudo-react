import Head from 'next/head';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import { CompletedChanlleges } from '../components/CompletedChanlleges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Home(props: HomeProps) {
  return (

    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <meta charSet='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />

          <link rel="manifest" href="/manifest.json" />
          <link href='/favicon.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/favicon.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChanlleges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
