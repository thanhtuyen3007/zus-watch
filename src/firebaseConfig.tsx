// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq2cU6DBlR2U_al33kgEyy2zE1UgTukrk",
  authDomain: "watch-data-433e4.firebaseapp.com",
  projectId: "watch-data-433e4",
  storageBucket: "watch-data-433e4.firebasestorage.app",
  messagingSenderId: "80713276980",
  appId: "1:80713276980:web:6abcfd6793f807acb4b461",
  measurementId: "G-73ZQC7ZNCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// initialize firebase services
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
 export { db, auth, storage };