// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDsIgC7w3N2AAoZkmE6SRrgWKxPfXzaKWc",
//   authDomain: "capstoneprojectauth-bfdfc.firebaseapp.com",
//   projectId: "capstoneprojectauth-bfdfc",
//   storageBucket: "capstoneprojectauth-bfdfc.firebasestorage.app",
//   messagingSenderId: "209219249521",
//   appId: "1:209219249521:web:7ec6bbd053a3a82646c2d0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsIgC7w3N2AAoZkmE6SRrgWKxPfXzaKWc",
  authDomain: "capstoneprojectauth-bfdfc.firebaseapp.com",
  projectId: "capstoneprojectauth-bfdfc",
  storageBucket: "capstoneprojectauth-bfdfc.appspot.com",
  messagingSenderId: "209219249521",
  appId: "1:209219249521:web:7ec6bbd053a3a82646c2d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create and export auth
export const auth = getAuth(app);

//Optional: also export app if needed
export default app;

