// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgoiiTTAmG4mIgGEjxMJJprAkEBE8KB7c",
  authDomain: "reddit-clone-8f178.firebaseapp.com",
  projectId: "reddit-clone-8f178",
  storageBucket: "reddit-clone-8f178.appspot.com",
  messagingSenderId: "517332499847",
  appId: "1:517332499847:web:3831e8cba5abe5d560a722",
  measurementId: "G-VD7E74YMF2"
};

// Initialize Firebase from SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app,firestore,auth,storage};