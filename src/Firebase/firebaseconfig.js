// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtsoZTjYVAEVj8LGkxEOUM-88th_v161w",
  authDomain: "shop-e-commerce-63526.firebaseapp.com",
  projectId: "shop-e-commerce-63526",
  storageBucket: "shop-e-commerce-63526.appspot.com",
  messagingSenderId: "1024606550855",
  appId: "1:1024606550855:web:53909ea91cbd31c82dea62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;