import { parseCookies } from 'nookies'
import { createContext, useContext } from 'react'
import {
  ProductContextTypes,
  ProductsProviderTypes
} from '../types/productContextTypes'

export const ProductContext = createContext({} as ProductContextTypes)
export const useProductContext = () => useContext(ProductContext)

const ProductsProvider = ({ children, ...context }: ProductsProviderTypes) => {
  const cookies = parseCookies(context)

  const handleCreateProduct = async (
    name: string,
    barCode: string,
    validity: string
  ) => {
    const response = await fetch('/api/product/create', {
      method: 'POST',
      body: JSON.stringify({
        name,
        barCode,
        validity
      }),
      headers: {
        authorization: cookies['auth.tokenAccess']
          ? cookies['auth.tokenAccess']
          : null
      }
    })

    console.log(response)
  }

  return (
    <ProductContext.Provider
      value={{
        handleCreateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
