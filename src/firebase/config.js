import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { envs } from '../config/adapters/env.adapter';

const firebaseConfig = {
    apiKey: envs.API_KEY,
    authDomain: envs.AUTH_DOMAIN,
    projectId: envs.PROJECT_ID,
    storageBucket: envs.STORAGE_BUCKET,
    messagingSenderId: envs.MESSAGING_SENDER_ID,
    appId: envs.APP_ID,
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
