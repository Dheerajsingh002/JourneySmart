// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQjWrRRVqOU9W9I7Ubzz7t6uf2xhZLvGA",
  authDomain: "ai-trip-planner-91785.firebaseapp.com",
  projectId: "ai-trip-planner-91785",
  storageBucket: "ai-trip-planner-91785.appspot.com",
  messagingSenderId: "997421775982",
  appId: "1:997421775982:web:50c0fb43f8a386790c3a7f",
  measurementId: "G-PNY06NQM4X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  db=getFirestore(app)
// const analytics = getAnalytics(app);