import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAqN1RJwG_fxhLRGiFBhDySYi6kL98MXjc",
  authDomain: "shaoor-347e8.firebaseapp.com",
  projectId: "shaoor-347e8",
  storageBucket: "shaoor-347e8.firebasestorage.app",
  messagingSenderId: "747616210964",
  appId: "1:747616210964:web:87c95428628e3beb141701",
  measurementId: "G-876NYC32Y8"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, db, auth, storage, analytics }; 