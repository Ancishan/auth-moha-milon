// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx6ehBdnoOkeptMx_36ZMr2pzmO5GBYDE",
  authDomain: "auth-moha-milon-fd6a1.firebaseapp.com",
  projectId: "auth-moha-milon-fd6a1",
  storageBucket: "auth-moha-milon-fd6a1.appspot.com",
  messagingSenderId: "238348133590",
  appId: "1:238348133590:web:0e2003206a5e648f081577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;