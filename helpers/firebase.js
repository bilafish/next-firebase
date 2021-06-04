import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMojsNGnS5RZAUH-hpgYfmr3SxVg6-TdI",
  authDomain: "nextfire-f878b.firebaseapp.com",
  projectId: "nextfire-f878b",
  storageBucket: "nextfire-f878b.appspot.com",
  messagingSenderId: "531960495717",
  appId: "1:531960495717:web:397df87a299bd0396e108c",
  measurementId: "G-WKFLHQN0EJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
