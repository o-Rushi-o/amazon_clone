// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCERgrV7hzVb2CGkjYqlXbMdKEUJ6kFCX0",
  authDomain: "clone-113dd.firebaseapp.com",
  projectId: "clone-113dd",
  storageBucket: "clone-113dd.appspot.com",
  messagingSenderId: "521502983202",
  appId: "1:521502983202:web:61d816eddd71d8898df67b",
  measurementId: "G-Z8C9KVZ2CD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
