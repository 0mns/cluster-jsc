import Layout from '../components/Layout'

import '../styles/bootstrap.rtl.css'
import '../styles/style.css'



function MyApp({ Component, pageProps }) {
  return (
    <Layout >
           
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
