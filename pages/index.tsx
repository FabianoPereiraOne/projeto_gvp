import Head from 'next/head'
import { About } from '../components/Home/About'
import { Footer } from '../components/Home/Footer'
import { Main } from '../components/Home/Main'
import { Plans } from '../components/Home/Plans'
import { Services } from '../components/Home/Services'
import '../styles/home'

const Home = () => {
  return (
    <>
      <Head>
        <title>GVP | Gerenciador de validade de produtos</title>
      </Head>
      <Main />
      <About />
      <Services />
      <Plans />
      <Footer />
    </>
  )
}

export default Home
