import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthContextProvider from '../context/authContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Validay({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default Validay
