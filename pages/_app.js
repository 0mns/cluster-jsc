
import { useEffect } from 'react';
import Layout from '../components/Layout'

import Head from 'next/head';


import '../styles/style.css'



function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        
      </Head>
    <Layout >
           
      <Component {...pageProps} />
    </Layout>
    </>
    )
}

export default MyApp

