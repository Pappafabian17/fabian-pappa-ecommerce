import { initializeApp } from "firebase/app";
// import { getFirestone } from "firebase/firestone";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-pHoRYP8qfRPsm1qN24BKv1H1udn3CjA",
  authDomain: "e-commerce-fabian.firebaseapp.com",
  projectId: "e-commerce-fabian",
  storageBucket: "e-commerce-fabian.appspot.com",
  messagingSenderId: "372981171953",
  appId: "1:372981171953:web:afa3060e87efedd6da4b50",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const db = getFirestore(app);
