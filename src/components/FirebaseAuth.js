import firebase from '../firebase'

export async function GoogleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  /*
      Define Required  Scopes here
  */

  return firebase.auth().signInWithPopup(provider).then((result)=>{
    localStorage.setItem('User',JSON.stringify({Name : result.user.displayName, Email: result.user.email}));
    return result;
  }).catch((error) => {
    return error;
  });
}

export async function GithubSignIn() {

  const provider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(provider).then((result) =>{
    localStorage.setItem('User', JSON.stringify({ Name: result.user.displayName, Email: result.user.email }));
    return result;
  }).catch((error) => {
    return error;
  });

}

export async function logout() {
  localStorage.removeItem('User');
  return firebase.auth().signOut().then(()=>{
    return "Success";
  }).catch(()=>{
    return "Error"
  });
}

export async function getCurrentUser() {
  return firebase.auth().currentUser;
}