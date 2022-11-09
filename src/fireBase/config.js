// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMFOxXENIcYn0pt8gEOgPIlkk6-x1aI2A",
  authDomain: "siglo21-calendario.firebaseapp.com",
  projectId: "siglo21-calendario",
  storageBucket: "siglo21-calendario.appspot.com",
  messagingSenderId: "37792995918",
  appId: "1:37792995918:web:82b68fabacdfbc024ec11f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
