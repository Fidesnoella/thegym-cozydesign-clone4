import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}

export default MyApp
