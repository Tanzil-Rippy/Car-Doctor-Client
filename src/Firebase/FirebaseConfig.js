// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId, 
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
//   apiKey: "AIzaSyC8zBllkJC3yOnzknOy2t6qEqcNBraio5Q",
//   authDomain: "car-doctor-78ae1.firebaseapp.com",
//   projectId: "car-doctor-78ae1",
//   storageBucket: "car-doctor-78ae1.appspot.com",
//   messagingSenderId: "675536475143",
//   appId: "1:675536475143:web:f12a69d231c8c6b7bb86a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;