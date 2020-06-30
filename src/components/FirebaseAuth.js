import jwt from 'jsonwebtoken'

import firebase,{db} from '../firebase'

export async function GoogleSignIn() {

  const provider = new firebase.auth.GoogleAuthProvider();
  /*
      Define Required  Scopes here
  */
  return firebase.auth().signInWithPopup(provider).then((result) => {
    db.collection('users').doc(result.user.uid).set({
      name: result.user.displayName,
      email: result.user.email,
      uid: result.user.uid,
      profileImageUrl: result.user.photoURL
    }, { merge: true });
    const resultData = { email: result.user.email, name: result.user.displayName, uid: result.user.uid, profileImageUrl: result.user.photoURL };

    const newSecureToken = jwt.sign(resultData, process.env.NEXT_PUBLIC_SECURE_TOKEN_ACCESS_KEY);
    localStorage.setItem('osc-app-token', newSecureToken);
    return result;
  }).catch((error) => {
    return error;
  });
}

export async function GithubSignIn() {

  const provider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(provider).then((result) => {

    db.collection('users').doc(result.user.uid).set({
      name: result.user.displayName,
      email: result.user.email,
      uid: result.user.uid,
      profileImageUrl: result.user.photoURL, 
    }, { merge: true });


    const resultData = { email: result.user.email, name: result.user.displayName, uid: result.user.uid, profileImageUrl: result.user.photoURL };
    const newSecureToken = jwt.sign(resultData, process.env.NEXT_PUBLIC_SECURE_TOKEN_ACCESS_KEY);
    localStorage.setItem('osc-app-token', newSecureToken);
    return result;
  }).catch((error) => {
    return error;
  });

}

export async function logout() {
  localStorage.removeItem('osc-app-token');
  return firebase.auth().signOut().then(() => {
    return "Success";
  }).catch(() => {
    return "Error"
  });
}

export async function getCurrentUser() {
  return firebase.auth().currentUser;
}

export async function verifySecuredToken(token) {

  return jwt.verify(token, process.env.NEXT_PUBLIC_SECURE_TOKEN_ACCESS_KEY, (err, userData) => {
    if (err)
      return null;
    if (userData.name === (null || undefined) || userData.email === (null || undefined) || userData.uid === (null || undefined))
      return null;
    return userData;
  });
}
