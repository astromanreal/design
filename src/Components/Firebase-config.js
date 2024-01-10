// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_MAGyVTMCrRW2LYBx6tkIE_ZzTKDXSw4",
  authDomain: "space-50533.firebaseapp.com",
  projectId: "space-50533",
  storageBucket: "space-50533.appspot.com",
  messagingSenderId: "101140733795",
  appId: "1:101140733795:web:0c31f1f749af58b90b3d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
