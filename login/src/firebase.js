import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-G6jOUH3N18CxQUxIXsli_GPgJztw7y0",
  authDomain: "reactlogin-f55b2.firebaseapp.com",
  projectId: "reactlogin-f55b2",
  storageBucket: "reactlogin-f55b2.appspot.com",
  messagingSenderId: "673481447869",
  appId: "1:673481447869:web:aa6989d2455cba50681ad4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
