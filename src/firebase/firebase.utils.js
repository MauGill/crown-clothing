import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCahHhyFDIlf-OlA6lxIw7Dd3B_V4A9p68",
    authDomain: "crowing-tst.firebaseapp.com",
    projectId: "crowing-tst",
    storageBucket: "crowing-tst.appspot.com",
    messagingSenderId: "416169058324",
    appId: "1:416169058324:web:a7f3e463a7d9b8aaf10701",
    measurementId: "G-93CFMFLCST"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup( provider );
  export default firebase;