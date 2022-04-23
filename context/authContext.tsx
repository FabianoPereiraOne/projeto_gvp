import { createContext, useContext, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import router from 'next/router'
import { setCookie } from 'nookies'
import {
  AuthContextProviderTypes,
  AuthContextTypes
} from '../types/contextTypes'
import { app } from '../services/firebaseNetwork'
import { destroyCookie } from 'nookies'

export const AuthContext = createContext({} as AuthContextTypes)
export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: AuthContextProviderTypes) => {
  app()
  const [userUid, setUserUid] = useState<string | null>(null)
  const [isAutenticated, setIsAutenticated] = useState<boolean>(false)

  const handleSignUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(getAuth(), email, password)
      .then(snapshot => {
        setUserUid(snapshot.user.uid)
        setIsAutenticated(true)
        snapshot.user
          .getIdToken()
          .then(token => {
            setCookie(undefined, 'auth.TokenAccess', token, {
              maxAge: 60 * 60 * 1 //1 hours
            })
          })
          .then(() => router.push('/dashboard'))
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        setUserUid(null)
        setIsAutenticated(false)
        console.log(error)
      })
  }

  const handleSignIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(getAuth(), email, password)
      .then(snapshot => {
        setUserUid(snapshot.user.uid)
        setIsAutenticated(true)
        snapshot.user
          .getIdToken()
          .then(token => {
            setCookie(undefined, 'auth.TokenAccess', token, {
              maxAge: 60 * 60 * 1 //1 hours
            })
          })
          .then(() => router.push('/dashboard'))
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        setUserUid(null)
        setIsAutenticated(false)
        console.log(error)
      })
  }

  const handleSignOut = async () => {
    await signOut(getAuth())
      .then(() => {
        setUserUid(null)
        setIsAutenticated(false)
        destroyCookie(undefined, 'auth.TokenAccess')
        router.push('/login')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        handleSignUp,
        handleSignIn,
        handleSignOut,
        isAutenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
