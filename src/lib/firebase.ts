import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const isFirebaseConfigured = Object.values(firebaseConfig).every(
  (value) => typeof value === 'string' && value.trim().length > 0,
);

let db: ReturnType<typeof getFirestore> | null = null;
let firebaseError: string | null = null;

if (!isFirebaseConfigured) {
  firebaseError = 'Missing Firebase environment variables. Add your VITE_FIREBASE_* values to a .env file and restart the app.';
} else {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } catch (error) {
    firebaseError = error instanceof Error ? error.message : 'Unable to initialize Firebase.';
  }
}

export { db, firebaseError };