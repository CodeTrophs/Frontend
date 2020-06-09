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
      delete formData.lastName; 
      db.collection('users').doc(uid).update({lastName: firebase.firestore.FieldValue.delete()}); 
    }
    return db.collection('users').doc(uid).set(formData,{merge:true}).then(()=>{
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
    const deleteFields = {};
    if (formData.title === '') {
        delete formData.title;
        deleteFields.title = firebase.firestore.FieldValue.delete();
    }

    if (formData.about === '') {
        delete formData.about;
        deleteFields.about = firebase.firestore.FieldValue.delete();
    }

    if (formData.skills.length === 0) {
        delete formData.skills;
        deleteFields.skills = firebase.firestore.FieldValue.delete();
    }

    db.collection('users').doc(uid).update(deleteFields);
    
    return db.collection('users').doc(uid).set(formData, { merge: true }).then(() => {
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
    const deleteFields={};
    if (formData.website === '') {
        delete formData.website;
        deleteFields.website = firebase.firestore.FieldValue.delete();
    }

    if (formData.github === '') {
        delete formData.github;
        deleteFields.github = firebase.firestore.FieldValue.delete();
    }

    if (formData.linkedIn === '') {
        delete formData.linkedIn;
        deleteFields.linkedIn = firebase.firestore.FieldValue.delete();
    }

    if (formData.twitter === '') {
        delete formData.twitter;
        deleteFields.twitter = firebase.firestore.FieldValue.delete();
    }
    db.collection('users').doc(uid).update(deleteFields);

    return db.collection('users').doc(uid).set(formData,{merge:true}).then(() => {
        return { status: 'success' };
    }).catch(() => {
        return { status: 'error' };
    });
}
