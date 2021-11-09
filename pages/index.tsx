import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import OurServices from '../components/OurServices/OurServices';
import Presentation from '../components/Presentation/Presentation';
import { GlobalContext } from '../context/Global.provider';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
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
          <div id='item4' className={styles.box} style={{backgroundColor: '#6b6b6b'}}>Cuarto</div>
          <div id='item5' className={styles.box} style={{backgroundColor: '#313131'}}>Quinto</div>
          <div id='item6' className={styles.box} style={{backgroundColor: '#242424'}}>Sexto</div>
          <div id='item7' className={styles.box} style={{backgroundColor: '#252020'}}>Séptimo</div>
          <div id='item8' className={styles.box} style={{backgroundColor: '#000000'}}>Octavo</div>
        </main>
      }
    </>
  );
};

export default Home;