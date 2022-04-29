import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContextProvider from '../context/authContext'
import '../styles/globals.css'

function Validay({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider context={pageProps}>
      <ToastContainer />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default Validay
