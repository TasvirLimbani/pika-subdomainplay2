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

  apiKey: "AIzaSyA-s014ClBZhxLHAiOCBkQD1s4JAcg67sM",
  authDomain: "pikashow-game-play2.firebaseapp.com",
  projectId: "pikashow-game-play2",
  storageBucket: "pikashow-game-play2.firebasestorage.app",
  messagingSenderId: "328344071461",
  appId: "1:328344071461:web:fd412c6eb368dfc6977ecc",
  measurementId: "G-NXQY37K4SC"
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