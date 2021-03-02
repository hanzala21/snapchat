import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4hVvIhB-D5aFMzd52ucoQ7chamaIqJiI",
    authDomain: "snapchat-clone-yt-3f628.firebaseapp.com",
    projectId: "snapchat-clone-yt-3f628",
    storageBucket: "snapchat-clone-yt-3f628.appspot.com",
    messagingSenderId: "1018384119968",
    appId: "1:1018384119968:web:60322d78d5202bb64471c5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};