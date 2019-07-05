
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
 var firebaseConfig = {
    apiKey: "AIzaSyB3SbMFJ8DoPPwMs-4gy8zAzlLfLpS2P_c",
    authDomain: "memes-f0109.firebaseapp.com",
    databaseURL: "https://memes-f0109.firebaseio.com",
    projectId: "memes-f0109",
    storageBucket: "",
    messagingSenderId: "920175333778",
    appId: "1:920175333778:web:bc71767d56fb0cf1"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export default db;