// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD56YKz10YIRS8NY3sb6fs8lFTZFeZ2vus",
  authDomain: "chatter-22.firebaseapp.com",
  projectId: "chatter-22",
  storageBucket: "chatter-22.appspot.com",
  messagingSenderId: "543022900256",
  appId: "1:543022900256:web:bbda60d73859f4a8014845",
  measurementId: "G-B87S2GV4CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
