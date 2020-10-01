import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyB1GlGJi1naoccuhakNoF53d9PUhtkynqc",
  authDomain: "pushtest-5b8c5.firebaseapp.com",
  databaseURL: "https://pushtest-5b8c5.firebaseio.com",
  projectId: "pushtest-5b8c5",
  storageBucket: "pushtest-5b8c5.appspot.com",
  messagingSenderId: "1040037119059",
  appId: "1:1040037119059:web:581ef0f66b58dfd372f2a6",
});
const messaging = initializedFirebaseApp.messaging();
export { messaging };