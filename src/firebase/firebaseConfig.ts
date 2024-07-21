// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8JHA9VxCAYI8ScPIZL5_at1vOjjPGNCg",
  authDomain: "fir-e46ac.firebaseapp.com",
  databaseURL: "https://fir-e46ac-default-rtdb.firebaseio.com",
  projectId: "fir-e46ac",
  storageBucket: "fir-e46ac.appspot.com",
  messagingSenderId: "516487294801",
  appId: "1:516487294801:web:e031bd19ff1becc23dad70",
  measurementId: "G-8PR1NESVKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app)
const fireAuth = getAuth(app)

export {fireDB, analytics, fireAuth}