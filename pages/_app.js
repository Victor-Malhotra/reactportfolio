import '../styles/globals.css'
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>Victor Malhotra</title>
        <meta name="description" content="Victor Malhotra's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>;
}

export default MyApp
