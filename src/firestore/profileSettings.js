import firebase from '../firebase';

export async function storedUserData(uid) {
    const db = firebase.firestore();
    return db.collection('users').doc(uid).get().then((res) => {
        const storedData = res.data();

        if (storedData) {
            return storedData;
        }
        return null;
    }).catch(() => {
        return "error";
    });
}

export async function setBasicInfo(receivedFormData) {
    const db = firebase.firestore();
    const formData = await JSON.parse(receivedFormData);
    const {uid} = formData;
    delete formData.uid;
    if(formData.lastName === '') { 
      formData.lastName = firebase.firestore.FieldValue.delete(); 
    }
    return db.collection('users').doc(uid).update(formData).then(()=>{
        return {status:'success'};
    }).catch(()=>{
        return {status:'error'};
    });
}

export async function setAboutInfo(receivedFormData) {
    const db = firebase.firestore();
    const formData = await JSON.parse(receivedFormData);
    const { uid } = formData;
    delete formData.uid;
    if (formData.title === '') {
        formData.title = firebase.firestore.FieldValue.delete();
    }

    if (formData.about === '') {
        formData.about = firebase.firestore.FieldValue.delete();
    }

    if (formData.skills.length === 0) {
        formData.skills = firebase.firestore.FieldValue.delete();
    }
    
    return db.collection('users').doc(uid).update(formData).then(() => {
        return { status: 'success' };
    }).catch(() => {
        return { status: 'error' };
    });
}

export async function setSocialHandles(receivedFormData) {
    const db = firebase.firestore();
    const formData = await JSON.parse(receivedFormData);  
    const { uid } = formData;
    delete formData.uid;
    if (formData.website === '') {
        formData.website = firebase.firestore.FieldValue.delete();
    }

    if (formData.github === '') {
        formData.github = firebase.firestore.FieldValue.delete();
    }

    if (formData.linkedIn === '') {
        formData.linkedIn = firebase.firestore.FieldValue.delete();
    }

    if (formData.twitter === '') {
        formData.twitter = firebase.firestore.FieldValue.delete();
    }

    return db.collection('users').doc(uid).update(formData).then(() => {
        return { status: 'success' };
    }).catch(() => {
        return { status: 'error' };
    });
}
