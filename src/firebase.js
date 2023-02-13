import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Database, getDatabase } from 'firebase/database';


  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl8EpYdBdXaGlQ9behEBlVeZXp1M2DKqo",
  authDomain: "db-mygit.firebaseapp.com",
  projectId: "db-mygit",
  storageBucket: "db-mygit.appspot.com",
  messagingSenderId: "688676240351",
  appId: "1:688676240351:web:a8aeb4c5a4c645f9c1e26a",
  measurementId: "G-YLGP1FDYXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      window.event.returnValue = false;
    });
  }

  //

const dataBases = getDatabase();
const linkref = Database.data
export default dataBases;