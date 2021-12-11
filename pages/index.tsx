import Aos from 'aos';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/Global.provider';
import styles from '../styles/Home.module.css';

const Header = dynamic(() => import( '../components/Header/Header' ));
const Presentation = dynamic(() => import( '../components/Presentation/Presentation' ));
const About = dynamic(() => import( '../components/About/About' ));
const OurServices = dynamic(() => import( '../components/OurServices/OurServices' ));
const LatestNews = dynamic(() => import( '../components/LatestNews/LatestNews' ));
const OurTeam = dynamic(() => import( '../components/OurTeam/OurTeam' ));
const Skills = dynamic(() => import( '../components/Skills/Skills' ));

const Home: React.FC = () => {
  const { data: { showMenu } } = useContext( GlobalContext );

  useEffect(() => {
    Aos.init({ duration:2000 });
  });

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
          <OurTeam />
          <Skills />
        </main>
      }
    </>
  );
};

export default Home;