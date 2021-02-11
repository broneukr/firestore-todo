import firebase from "firebase";
import "firebase/firestore";
import { initFirestorter, Collection } from "firestorter";

firebase.initializeApp({
  apiKey: "AIzaSyCqwWYWYn7Yf1_lx7SBq3Ns4ZFF9SbTk6Q",
  authDomain: "ll1lll.firebaseapp.com",
  projectId: "ll1lll",
  storageBucket: "ll1lll.appspot.com",
  messagingSenderId: "773633719961",
  appId: "1:773633719961:web:1e9008b89e3572035c4208",
  measurementId: "G-7VC6BJ071Y"
});

initFirestorter({ firebase: firebase });

const todos = new Collection("todos");

export { todos };
