import { collection, addDoc } from 'firebase/firestore';
import { db, firebaseError } from './firebase';

interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  type: 'contact' | 'demo';
}

const getErrorMessage = (error: unknown) => {
  if (error && typeof error === 'object' && 'code' in error) {
    const code = (error as { code?: string }).code;
    if (code === 'permission-denied') {
      return 'Firestore permission denied. Please update your Firestore rules to allow writes.';
    }
    if (code === 'failed-precondition') {
      return 'Firestore is not enabled for this project. Enable Firestore in the Firebase console.';
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unable to send your message right now.';
};

export const submitForm = async (data: FormData) => {
  console.log('submitForm called with:', data);

  if (!db) {
    return { success: false, error: firebaseError ?? 'Firebase is not configured.' };
  }

  try {
    const colRef = collection(db, 'leads');
    const docRef = await addDoc(colRef, {
      ...data,
      createdAt: new Date().toISOString(),
    });

    console.log('Document written! ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Firestore write error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};