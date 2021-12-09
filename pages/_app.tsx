import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalProvider } from '../context/Global.provider';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Online Banking Santander</title>
        <meta name='description' content='Company Web' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;