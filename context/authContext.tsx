import { createContext, useContext } from 'react'
import { hash } from 'bcryptjs'
import {
  AuthContextProviderTypes,
  AuthContextTypes
} from '../types/contextTypes'
import { toast } from 'react-toastify'

export const AuthContext = createContext({} as AuthContextTypes)
export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: AuthContextProviderTypes) => {
  const handleSignUp = async (email: string, password: string) => {
    const response = await fetch('/api/registerUser', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password: await hash(password, 8)
      })
    })
    const { token, isFailed, message } = await response.json()

    if (isFailed) {
      toast(message)
      return
    }

    console.log(token)
  }

  const handleSignIn = async (email: string, password: string) => {}

  const handleSignOut = async () => {}

  return (
    <AuthContext.Provider
      value={{
        handleSignUp,
        handleSignIn,
        handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
