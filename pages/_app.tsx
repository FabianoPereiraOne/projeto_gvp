import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContextProvider from '../context/authContext'
import ProductsProvider from '../context/productContext'
import '../styles/globals.css'

function GVP({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider context={pageProps}>
      <ProductsProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </ProductsProvider>
    </AuthContextProvider>
  )
}

export default GVP
