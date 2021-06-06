import Layout from '../components/Layout'
import '../styles/globals.css'

// from here app start to rendered... 
function MyApp({ Component, pageProps }) {

  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
