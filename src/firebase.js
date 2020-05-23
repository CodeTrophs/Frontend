import firebase from "firebase"

const firebaseConfig = {
    // add config here
};
try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
 export default firebase;