import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/Global.provider';
import styles from '../styles/Home.module.css';

const Header = dynamic(() => import( '../components/Header/Header' ));
const Presentation = dynamic(() => import( '../components/Presentation/Presentation' ));
const About = dynamic(() => import( '../components/About/About' ));
const OurServices = dynamic(() => import( '../components/OurServices/OurServices' ));
const LatestNews = dynamic(() => import( '../components/LatestNews/LatestNews' ));

const Home: React.FC = () => {
  const { data: { showMenu } } = useContext( GlobalContext );

  return (
    <>
      <Head>
        <title>Company App</title>
        <meta name="description" content="Company web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {
        !showMenu &&
        <main className={styles.main}>
          <Presentation />
          <About />
          <OurServices />
          <LatestNews />
        </main>
      }
    </>
  );
};

export default Home;