import { ReactNode } from 'react'

export type AuthContextTypes = {
  handleSignUp: (
    email: string,
    password: string,
    name: string,
    surname: string
  ) => Promise<void>
  handleSignIn: (email: string, password: string) => Promise<void>
  handleSignOut: () => Promise<void>
}

export type AuthContextProviderTypes = {
  children: ReactNode
  context: any
}
