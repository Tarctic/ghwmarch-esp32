import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "ghwmarchesp32.firebaseapp.com",
    databaseURL: "https://ghwmarchesp32-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ghwmarchesp32",
    storageBucket: "ghwmarchesp32.appspot.com",
    messagingSenderId: "53561471997",
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-0GKEYHSR9Q"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;
