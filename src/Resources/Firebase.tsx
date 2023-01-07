import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import "firebase/auth";
// console.log(process.env.REACT_APP_FIREBASE_KEY);
console.log(import.meta.env.VITE_FIREBASE_KEY);
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_APP_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});
// const app = initializeApp({
//   apiKey: "AIzaSyBBnk1RPAdtO-2PNHx8ho-vz51cVlCt-Jc",
//   authDomain: "eccomerce-dev.firebaseapp.com",
//   projectId: "eccomerce-dev",
//   storageBucket: "eccomerce-dev.appspot.com",
//   messagingSenderId: "465726823255",
//   appId: "1:465726823255:web:285aa29294cc18e67fbc12",
// });

// export const auth = app.auth();
export const auth = getAuth(app);
export default app;
