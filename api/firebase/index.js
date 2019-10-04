import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import {firebaseConfig} from '../../config/firebaseConfig';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();

export {
    firebase,
    firestore,
    auth,
    googleAuthProvider
};
