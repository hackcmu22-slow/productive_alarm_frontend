// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi4u-NmQ8azH9uOEarMGjYTDDUZF6Z1b0",
  authDomain: "hackcmu22-slow.firebaseapp.com",
  projectId: "hackcmu22-slow",
  storageBucket: "hackcmu22-slow.appspot.com",
  messagingSenderId: "111710505786",
  appId: "1:111710505786:web:aeb8af1eb471621b5c5e03",
  measurementId: "G-595NNF3XY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp, { persistence: AsyncStorage });
export const firebaseFirestore = getFirestore(firebaseApp);