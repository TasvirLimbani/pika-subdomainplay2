import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

  apiKey:  "AIzaSyAi_lMUmlK8cY5gek_Fnkez5Xu9qbMfOzE",
  authDomain: "pikashowgames-f8d4c.firebaseapp.com",
  projectId: "pikashowgames-f8d4c",
  storageBucket: "pikashowgames-f8d4c.firebasestorage.app",
  messagingSenderId: "900333122700",
  appId: "1:900333122700:web:beb3523797a75c653337a9",
  measurementId: "G-6N8ZC8F8YC",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

// Analytics (browser only)
export let analytics = null

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app)
    }
  })
}

export default app