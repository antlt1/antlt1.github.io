import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpA3_xsbfGxeJbrd6TLwQmbii8XOoyg2M",
  authDomain: "db-myproject-d305d.firebaseapp.com",
  projectId: "db-myproject-d305d",
  storageBucket: "db-myproject-d305d.firebasestorage.app",
  messagingSenderId: "352093785520",
  appId: "1:352093785520:web:f08d946b9c255e9d8ada75",
  measurementId: "G-NPVQ51TWEK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Preserve authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log("User is logged in:", user);
  } else {
    // console.log("User is logged out");
  }
});
