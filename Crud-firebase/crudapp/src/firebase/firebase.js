// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4I3shpWdoiB20O2vNNr5jL6OEi-lSLUM",
  authDomain: "crud-e7357.firebaseapp.com",
  projectId: "crud-e7357",
  storageBucket: "crud-e7357.firebasestorage.app",
  messagingSenderId: "552974086599",
  appId: "1:552974086599:web:530d9a05c5664ee19fa9e2",
  measurementId: "G-70L9WW9LCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)