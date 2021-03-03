import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Mike Uderevskyi</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;

// CUSTOM STYLES //

import '../styles/app.scss';
import '../styles/home.scss';
import '../styles/about.scss';
import '../styles/works.scss';
import '../styles/contact.scss';