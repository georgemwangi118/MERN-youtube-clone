import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "video-share-e23e8.firebaseapp.com",
  projectId: "video-share-e23e8",
  storageBucket: "video-share-e23e8.appspot.com",
  messagingSenderId: "64199425737",
  appId: "1:64199425737:web:e8df4835d83fc72dd8d718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
