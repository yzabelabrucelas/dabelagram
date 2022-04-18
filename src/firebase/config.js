// Import the functions you need from the SDKs you need

//npm install firebase
//or import this -> npm install firebase@7.16.1
//uninstall npm uninstall firebase step
//then install firebase 7

//v9
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC5CC69-2NRwgL3LCUfKJGKOiTm8H1zxkQ",
//   authDomain: "dabelagram.firebaseapp.com",
//   projectId: "dabelagram",
//   storageBucket: "dabelagram.appspot.com",
//   messagingSenderId: "224796519476",
//   appId: "1:224796519476:web:b0e53ca3dcc61c92e96e61",
//   measurementId: "G-4HELRGM2YV",
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// const projectStorage = getStorage();
// const projectFirestore = getFirestore();

// export { projectStorage, projectFirestore };




//v7
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC5CC69-2NRwgL3LCUfKJGKOiTm8H1zxkQ",
  authDomain: "dabelagram.firebaseapp.com",
  projectId: "dabelagram",
  storageBucket: "dabelagram.appspot.com",
  messagingSenderId: "224796519476",
  appId: "1:224796519476:web:b0e53ca3dcc61c92e96e61",
  measurementId: "G-4HELRGM2YV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };