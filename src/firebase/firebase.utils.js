import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAloRrAbuMlRcd_-VBsiFvYbstmftlmPP8",
    authDomain: "ecommerce-db-4edbd.firebaseapp.com",
    databaseURL: "https://ecommerce-db-4edbd.firebaseio.com",
    projectId: "ecommerce-db-4edbd",
    storageBucket: "ecommerce-db-4edbd.appspot.com",
    messagingSenderId: "407261135271",
    appId: "1:407261135271:web:559702d3d01a7ce52cb682",
    measurementId: "G-MWWV2P0VXH"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;