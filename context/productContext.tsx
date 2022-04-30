import { createContext, useContext } from 'react'
import {
  ProductContextTypes,
  ProductsProviderTypes
} from '../types/productContextTypes'

export const ProductContext = createContext({} as ProductContextTypes)
export const useProductContext = () => useContext(ProductContext)

const ProductsProvider = ({ children }: ProductsProviderTypes) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}

export default ProductsProvider
