
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxxzI0OJz2dnB9wUurqKp56RewZZ9PpjQ",
  authDomain: "instagram-clone-3b303.firebaseapp.com",
  databaseURL: "https://instagram-clone-3b303.firebaseio.com",
  projectId: "instagram-clone-3b303",
  storageBucket: "instagram-clone-3b303.appspot.com",
  messagingSenderId: "936555570039",
  appId: "1:936555570039:web:60839f5220c7026376f772"
})
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };