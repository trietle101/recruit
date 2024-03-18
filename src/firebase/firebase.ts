// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGVStso6PpSyom7e6WwKCke5CmXpsMVjk",
  authDomain: "recruitment-34e32.firebaseapp.com",
  projectId: "recruitment-34e32",
  storageBucket: "recruitment-34e32.appspot.com",
  messagingSenderId: "717472342664",
  appId: "1:717472342664:web:b9bf8abaeb386cbb02b53d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
