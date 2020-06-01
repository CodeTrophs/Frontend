import firebase from '../firebase'

export async function GoogleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  /*
      Define Required  Scopes here
  */

  return firebase.auth().signInWithPopup(provider).then((result)=>{
    return result;
  }).catch((error) => {
    return error;
  });
}

export async function GithubSignIn() {

  const provider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(provider).then((result) =>{
    return result;
  }).catch((error) => {
    return error;
  });

}

export async function logout() {
  return firebase.auth().signOut().then(()=>{
    return "Success";
  }).catch(()=>{
    return "Error"
  });
}