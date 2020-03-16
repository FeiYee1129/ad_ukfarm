// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyAR41iumIHKGyf2ezW-mmgLop2FfOaX4uE",
  authDomain: "ukfarm-7861c.firebaseapp.com",
  databaseURL: "https://ukfarm-7861c.firebaseio.com",
  projectId: "ukfarm-7861c",
  storageBucket: "ukfarm-7861c.appspot.com",
  messagingSenderId: "713913689509",
  appId: "1:713913689509:web:bf3726cda953c21c2eb44c",
  measurementId: "G-N66TQ6BPWE"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }