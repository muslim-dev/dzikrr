import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

let firebaseApp: firebase.app.App | undefined;
let db: firebase.firestore.Firestore | undefined;
let auth: firebase.auth.Auth | undefined;
let provider: firebase.auth.GoogleAuthProvider | undefined;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  db = firebaseApp.firestore();
  auth = firebaseApp.auth();
  provider = new firebase.auth.GoogleAuthProvider();
}

export { firebaseApp, auth, provider };
export default db;
