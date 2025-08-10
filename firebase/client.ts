
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";        
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBcotXdmtrL04G4D2nOmFP4E7EGC02G6mM",
  authDomain: "prepwise-a604d.firebaseapp.com",
  projectId: "prepwise-a604d",
  storageBucket: "prepwise-a604d.firebasestorage.app",
  messagingSenderId: "596910843776",
  appId: "1:596910843776:web:6de920542d119604318365",
  measurementId: "G-RTN2J79PSE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
