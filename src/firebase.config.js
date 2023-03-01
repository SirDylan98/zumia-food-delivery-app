// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClSPnjU-NJtGg2rYheDlZ7bH13t70Lz3E",
  authDomain: "netflix-app-5a239.firebaseapp.com",
  projectId: "netflix-app-5a239",
  storageBucket: "netflix-app-5a239.appspot.com",
  messagingSenderId: "220204614128",
  appId: "1:220204614128:web:f78fab62c04b0886485d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);
const storage=getStorage(app)
export {app,firestore,storage};  