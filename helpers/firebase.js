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
// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

// Function used to convert a Firestore timestamp to number
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
// The server timestamp ensures data time-based data will be consistent for all users.
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
