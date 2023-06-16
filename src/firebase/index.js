import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBnelDW_nY5GYI6CXc7EaCmjOO5POiCwIg",
  authDomain: "fir-430a8.firebaseapp.com",
  projectId: "fir-430a8",
  storageBucket: "fir-430a8.appspot.com",
  messagingSenderId: "586639493570",
  appId: "1:586639493570:web:5edefe192d12b2bd50ae5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };