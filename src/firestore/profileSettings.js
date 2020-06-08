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
        return "Error";
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
        return {status:'Basic Information Updated Successfully'};
    }).catch(()=>{
        return {status:'An error occurred while performing updation! Please try again later. '};
    });
}

export async function setAboutInfo(receivedFormData) {
    const db = firebase.firestore();
    const formData = await JSON.parse(receivedFormData);
    const { uid } = formData;
    delete formData.uid;
    if (formData.title === '') {
        delete formData.title;
        db.collection('users').doc(uid).update({ title: firebase.firestore.FieldValue.delete() });
    }

    if (formData.about === '') {
        delete formData.about;
        db.collection('users').doc(uid).update({ about: firebase.firestore.FieldValue.delete() });
    }

    if (formData.skills.length === 0) {
        delete formData.skills;
        db.collection('users').doc(uid).update({ skills: firebase.firestore.FieldValue.delete() });
    }

    return db.collection('users').doc(uid).set(formData, { merge: true }).then(() => {
        return { status: 'Data Updated Successfully' };
    }).catch(() => {
        return { status: 'An error occurred while performing updation! Please try again later. ' };
    });
}

export async function setSocialHandles(receivedFormData) {
    const db = firebase.firestore();
    const formData = await JSON.parse(receivedFormData);  
    const { uid } = formData;
    delete formData.uid;
    if (formData.website === '') {
        delete formData.website;
        db.collection('users').doc(uid).update({ website: firebase.firestore.FieldValue.delete() });
    }

    if (formData.github === '') {
        delete formData.github;
        db.collection('users').doc(uid).update({ github: firebase.firestore.FieldValue.delete() });
    }

    if (formData.linkedIn === '') {
        delete formData.linkedIn;
        db.collection('users').doc(uid).update({ linkedIn: firebase.firestore.FieldValue.delete() });
    }

    if (formData.twitter === '') {
        delete formData.twitter;
        db.collection('users').doc(uid).update({ twitter: firebase.firestore.FieldValue.delete() });
    }

    return db.collection('users').doc(uid).set(formData,{merge:true}).then(() => {
        return { status: 'Social Handles Updated Successfully' };
    }).catch(() => {
        return { status: 'An error occurred while performing updation! Please try again later. ' };
    });
}
