import { createContext, useContext } from 'react'
import { hash } from 'bcryptjs'
import {
  AuthContextProviderTypes,
  AuthContextTypes
} from '../types/contextTypes'

export const AuthContext = createContext({} as AuthContextTypes)
export const useAuthContext = () => useContext(AuthContext)
import router from 'next/router'
import { destroyCookie, setCookie } from 'nookies'

const AuthContextProvider = ({
  children,
  context
}: AuthContextProviderTypes) => {
  const handleSignUp = async (email: string, password: string) => {
    const response = await fetch('/api/user/signUp', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password: await hash(password, 8)
      })
    })
    const { token, errorMessage } = await response.json()

    if (errorMessage) {
      return
    }

    setCookie({}, 'auth.tokenAccess', token, {
      maxAge: 60 * 60 // 1 hour
    })

    router.push('/dashboard')
  }

  const handleSignIn = async (email: string, password: string) => {
    const response = await fetch('/api/user/signIn', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })
    const { token, errorMessage } = await response.json()

    if (errorMessage) {
      return
    }

    setCookie({}, 'auth.tokenAccess', token, {
      maxAge: 60 * 60 // 1 hour
    })

    router.push('/dashboard')
  }

  const handleSignOut = async () => {
    destroyCookie(context, 'auth.tokenAccess')
    router.push('/login')
  }

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
