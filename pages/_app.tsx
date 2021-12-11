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
        <link
          href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          rel='stylesheet'
          integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
          crossOrigin='anonymous' />
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;