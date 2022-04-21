import { createContext, useContext, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'
import {
  AuthContextProviderTypes,
  AuthContextTypes
} from '../types/contextTypes'
import { app } from '../services/firebaseNetwork'

export const AuthContext = createContext({} as AuthContextTypes)
export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: AuthContextProviderTypes) => {
  app()
  const [userUid, setUserUid] = useState<string | null>(null)

  const handleSignUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(getAuth(), email, password)
      .then(snapshot => {
        setUserUid(snapshot.user.uid)
        console.log(snapshot)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSignIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(getAuth(), email, password)
      .then(snapshot => {
        console.log(snapshot)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSignOut = async () => {
    await signOut(getAuth()).catch(error => console.log(error))
  }

  return (
    <AuthContext.Provider value={{ handleSignUp, handleSignOut, handleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
