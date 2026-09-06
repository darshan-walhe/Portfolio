import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);

// This backend is the ONLY thing that ever talks to Firestore directly —
// the public site and the admin panel both go through this Express API.
// Firestore Security Rules require every write (and every read of private
// collections) to come from this fixed admin identity, so we sign in once
// here, before the server starts accepting requests, using a top-level
// await (this file is loaded as an ES module).
if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
  try {
    await signInWithEmailAndPassword(auth, process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);
    console.log('✓ Backend authenticated with Firebase as', process.env.ADMIN_EMAIL);
  } catch (err) {
    console.error('✗ Backend Firebase authentication failed:', err.message);
    console.error('  Firestore reads/writes will fail until ADMIN_EMAIL/ADMIN_PASSWORD are fixed.');
  }
} else {
  console.warn('⚠ ADMIN_EMAIL / ADMIN_PASSWORD not set — Firestore calls will be unauthenticated and will fail once rules are locked down.');
}

export default db;