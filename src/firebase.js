// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbhrrJVARFarebm9eUsxtNsHiW2AZHsNQ",
  authDomain: "todo-41ad3.firebaseapp.com",
  projectId: "todo-41ad3",
  storageBucket: "todo-41ad3.appspot.com",
  messagingSenderId: "696918732717",
  appId: "1:696918732717:web:ee93da910a2696dcaf7b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
