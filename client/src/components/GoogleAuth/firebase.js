import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5BLg84yZgLEwLov_WYE84IxgLJGHqboI",
  authDomain: "mmarket-d6fff.firebaseapp.com",
  projectId: "mmarket-d6fff",
  storageBucket: "mmarket-d6fff.appspot.com",
  messagingSenderId: "969396757990",
  appId: "1:969396757990:web:6b0b21b517b55818d9e227"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};