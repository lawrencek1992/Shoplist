import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAZyA28rB18uFyMwrm6kDJ5t4BBl4wg66o",
    authDomain: "shoplist-1ad77.firebaseapp.com",
    projectId: "shoplist-1ad77",
    storageBucket: "shoplist-1ad77.appspot.com",
    messagingSenderId: "172665213355",
    appId: "1:172665213355:web:7a513eaaec286148a1c2ee",
    measurementId: "G-HJS68YMZXE"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;