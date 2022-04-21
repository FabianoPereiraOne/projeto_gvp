import { initializeApp, getApps } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_VERCEL_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_VERCEL_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_VERCEL_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_VERCEL_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_VERCEL_APP_ID
}

export const app = () => {
  if (getApps().length == 0) {
    initializeApp(firebaseConfig)
  }
}
