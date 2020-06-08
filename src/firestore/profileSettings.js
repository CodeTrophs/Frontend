import * as FirebaseAuth from '../components/FirebaseAuth';
import firebase from '../firebase';

export async function setBasicInfo(receivedFormData) {
    const db = firebase.firestore();
    const currentUser = await FirebaseAuth.verifySecuredToken(localStorage.getItem('osc-app-token'));
    const formData = await JSON.parse(receivedFormData);
    return db.collection('users').doc(currentUser.uid).set({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        userName:formData.userName
    },{merge:true}).then(()=>{
        return {status:'Basic Information Updated Successfully'};
    }).catch(()=>{
        return {status:'An error occurred while performing updation! Please try again later. '};
    });
}

export async function storedUserData() {
    const db = firebase.firestore();
    const currentUser = await FirebaseAuth.verifySecuredToken(localStorage.getItem('osc-app-token'));
    return db.collection('users').doc(currentUser.uid).get().then((res) => {
        const storedData = res.data();

        if(storedData) {
            return storedData; }
        
         return null;
        
    }).catch(() => {
        return "Error";
    });
}


export async function setAboutInfo(receivedFormData) {
    const db = firebase.firestore();
    const currentUser = await FirebaseAuth.verifySecuredToken(localStorage.getItem('osc-app-token'));
    const formData = await JSON.parse(receivedFormData);
    return db.collection('users').doc(currentUser.uid).set({
        title: formData.title,
        about: formData.about,
        skills: formData.skills
    }, { merge: true }).then(() => {
        return { status: 'Data Updated Successfully' };
    }).catch(() => {
        return { status: 'An error occurred while performing updation! Please try again later. ' };
    });
}



export async function setSocialHandles(receivedFormData) {
    const db = firebase.firestore();
    const currentUser = await FirebaseAuth.verifySecuredToken(localStorage.getItem('osc-app-token'));
    const formData = await JSON.parse(receivedFormData);  
    return db.collection('users').doc(currentUser.uid).set({
        website: formData.website,
        github: formData.github,
        linkedIn: formData.linkedIn,
        twitter: formData.twitter
    },{merge:true}).then(() => {
        return { status: 'Social Handles Updated Successfully' };
    }).catch(() => {
        return { status: 'An error occurred while performing updation! Please try again later. ' };
    });
}
