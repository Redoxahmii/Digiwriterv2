// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXTQoKO_JVrS-H3To4QiOSyfDy2snQgBc",
  authDomain: "ai-writer-1369d.firebaseapp.com",
  projectId: "ai-writer-1369d",
  storageBucket: "ai-writer-1369d.appspot.com",
  messagingSenderId: "198456586805",
  appId: "1:198456586805:web:8efd4102b817c0872a377c",
  measurementId: "G-XSXT7RW7JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app , auth};