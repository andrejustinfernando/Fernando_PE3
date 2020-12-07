import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyANUZU7yjfa_dJMGndJAv7XijUuGwE-Hrk",
  authDomain: "quotesapp-f380e.firebaseapp.com",
  databaseURL: "https://quotesapp-f380e.firebaseio.com",
  projectId: "quotesapp-f380e",
  storageBucket: "quotesapp-f380e.appspot.com",
  messagingSenderId: "814762874739",
  appId: "1:814762874739:web:6d2d449b184ed8a89c1706"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const firestore = firebase.firestore;

export { firebase };