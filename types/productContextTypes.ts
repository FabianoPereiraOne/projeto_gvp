import { ReactNode } from 'react'

export type ProductContextTypes = {
  handleCreateProduct: (
    name: string,
    barCode: string,
    validity: string
  ) => Promise<void>
}
export type ProductsProviderTypes = {
  children: ReactNode
}
