import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head'
import Navbar from '../components/navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>法印佛堂</title>
    </Head>
    <Component {...pageProps} />
  </>
}
