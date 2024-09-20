import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7PLnnzxH-vBwEqAbIrJ938aS3Ozrl21o",
  authDomain: "fir-todo-app-f994d.firebaseapp.com",
  projectId: "fir-todo-app-f994d",
  storageBucket: "fir-todo-app-f994d.appspot.com",
  messagingSenderId: "11052597038",
  appId: "1:11052597038:web:e748d73a975b98ad1c04bf",
  measurementId: "G-WQ91YRCKD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
