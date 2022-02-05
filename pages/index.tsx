import { About } from '../components/Home/About'
import { Footer } from '../components/Home/Footer'
import { Services } from '../components/Home/Services'
import { Plans } from '../components/Home/Plans'
import { Main } from '../components/Home/Main'
import '../styles/home'
import Head from 'next/head'

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
