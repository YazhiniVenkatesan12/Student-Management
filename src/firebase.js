// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Config (Replace with your Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyClyhdlRrQ6hyVoTxpQ8Zi6Q0exEJzTWFo",
  authDomain: "student-management-e1305.firebaseapp.com",
  projectId: "student-management-e1305",
  storageBucket: "student-management-e1305.firebasestorage.app",
  messagingSenderId: "248047980074",
  appId: "1:248047980074:web:d2eb91e20606c6efa37d53",
  measurementId: "G-QF5QSHGDMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
