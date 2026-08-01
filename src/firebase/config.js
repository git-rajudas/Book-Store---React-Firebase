import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBmv_zPxz6Bgna9A4znMEURbMfJHk1g150",
  authDomain: "fir-app-509e5.firebaseapp.com",
  projectId: "fir-app-509e5",
  storageBucket: "fir-app-509e5.firebasestorage.app",
  messagingSenderId: "1010779503750",
  appId: "1:1010779503750:web:87c671beee7ac7b16a2507"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;