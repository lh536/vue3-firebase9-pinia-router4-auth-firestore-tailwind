// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu58nF8NiPqWmLqiGURqGA6h9mjl8agFw",
  authDomain: "pinia-firebase9.firebaseapp.com",
  projectId: "pinia-firebase9",
  storageBucket: "pinia-firebase9.appspot.com",
  messagingSenderId: "804736553882",
  appId: "1:804736553882:web:238f5cdb9529a37680a023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
