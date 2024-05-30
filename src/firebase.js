// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3Ub4m_HB-z3RkbI1-nAmLdRAx6NkXu38",
  authDomain: "getyoursapp.firebaseapp.com",
  databaseURL: "https://getyoursapp-default-rtdb.firebaseio.com",
  projectId: "getyoursapp",
  storageBucket: "getyoursapp.appspot.com",
  messagingSenderId: "879086053009",
  appId: "1:879086053009:web:fc34d4b2c5f0ec926d8130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);