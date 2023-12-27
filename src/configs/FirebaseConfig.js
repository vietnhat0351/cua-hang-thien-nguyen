// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRu5S3B3GE6naQdzQ1Zxu_lReSUhbPhHA",
  authDomain: "cua-hang-thien-nguyen.firebaseapp.com",
  projectId: "cua-hang-thien-nguyen",
  storageBucket: "cua-hang-thien-nguyen.appspot.com",
  messagingSenderId: "250200422284",
  appId: "1:250200422284:web:5adf940fffefbcebd548a9",
  measurementId: "G-TCEZNHSBLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDb = getStorage(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
