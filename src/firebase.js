import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHVnwp-dXfWGuZZUR6S5_tiJlZtyareUg",
  authDomain: "vue-firestore-chat-ffee8.firebaseapp.com",
  databaseURL: "https://vue-firestore-chat-ffee8.firebaseio.com",
  projectId: "vue-firestore-chat-ffee8",
  storageBucket: "vue-firestore-chat-ffee8.appspot.com",
  messagingSenderId: "294780628294",
  appId: "1:294780628294:web:9e2446a997f7f756088947",
  measurementId: "G-7Q965ZQT97"
});

export const db = firebaseApp.firestore();
