import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtK_vqR37zPhmPtiPTga4_TGgXA-TcG6E',
  authDomain: 'embotics-website.firebaseapp.com',
  projectId: 'embotics-website',
  storageBucket: 'embotics-website.firebasestorage.app',
  messagingSenderId: '592684496386',
  appId: '1:592684496386:web:1d5f665aca97527aced91b',
};

let db: ReturnType<typeof getFirestore> | null = null;
let firebaseError: string | null = null;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  firebaseError = error instanceof Error ? error.message : 'Unable to initialize Firebase.';
}

export { db, firebaseError };