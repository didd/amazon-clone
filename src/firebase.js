import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnTGDlevjry5j4kjAf2NUUIm-2pGJBabI",
  authDomain: "clone-c685d.firebaseapp.com",
  databaseURL: "https://clone-c685d.firebaseio.com",
  projectId: "clone-c685d",
  storageBucket: "clone-c685d.appspot.com",
  messagingSenderId: "1069867269323",
  appId: "1:1069867269323:web:12fa0963d628fd1f146f4e",
  measurementId: "G-30KVTKTSW8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
