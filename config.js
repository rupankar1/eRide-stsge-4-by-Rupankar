import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAAaJKwPcPgphDTaPUtSya1iMOwmApqfzk",
    authDomain: "e-library-da2b8.firebaseapp.com",
    projectId: "e-library-da2b8",
    storageBucket: "e-library-da2b8.appspot.com",
    messagingSenderId: "570679573113",
    appId: "1:570679573113:web:13f9fffa142b84176772a8"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


