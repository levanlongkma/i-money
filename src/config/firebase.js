import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Timestamp} from '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmuM5C_sbD8_iVLxAibM1jH5VJm9O8rgc",
  authDomain: "i-money-79601.firebaseapp.com",
  projectId: "i-money-79601",
  storageBucket: "i-money-79601.appspot.com",
  messagingSenderId: "931647460192",
  appId: "1:931647460192:web:3f2b857a4ae21518350405",
  measurementId: "G-MXZ8SXZ2TW"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFileStore = firebase.firestore();
const timestamp = Timestamp.fromDate(new Date());

export {projectAuth, projectFileStore, timestamp}