import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAxlUq0c9jKF5kO2Y3Ie1vGZXIUEjxoJSg",
    authDomain: "krown-db-71ae7.firebaseapp.com",
    databaseURL: "https://krown-db-71ae7.firebaseio.com",
    projectId: "krown-db-71ae7",
    storageBucket: "krown-db-71ae7.appspot.com",
    messagingSenderId: "219483284538",
    appId: "1:219483284538:web:f42cddebbf68a444240103",
    measurementId: "G-8RV749TWGC"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase