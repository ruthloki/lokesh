// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQK0g9s9OPDXazfRf85cufwhwCaydvBDo",
  authDomain: "lokilokesh-aafb2.firebaseapp.com",
  projectId: "lokilokesh-aafb2",
  storageBucket: "lokilokesh-aafb2.firebasestorage.app",
  messagingSenderId: "257063567549",
  appId: "1:257063567549:web:e89ffbb4bdf3702438f7d4",
  measurementId: "G-L2P1KXS2ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;