import firebase,{db} from '../firebase';
// get repositories without any filter
export async function getRepos(nodeId, searchRepo, filterLanguage, sortMethod, sortOrder) {

  let firstPage = db.collection('repositories').orderBy(sortMethod,sortOrder).limit(20).startAfter(nodeId);

  if (filterLanguage !== 'All' && searchRepo !== '')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('full_name', '==', searchRepo)
      .where('language', '==', filterLanguage).limit(20).startAfter(nodeId);
  else if (filterLanguage !== 'All')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('language', '==', filterLanguage).limit(20).startAfter(nodeId);
  else if (searchRepo !== '')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('full_name', '==', searchRepo).limit(20).startAfter(nodeId);
    // firstPage = db.collection('repositories').orderBy(sortMethod).where('full_name', '>=', + '\uf8ff' + searchRepo).where('full_name', '<=', searchRepo).limit(20).startAfter(nodeId);

  return firstPage.get().then(snapshot => {
    return snapshot;
  }).catch(() => {
    return null;
  });
}

export async function getLanguageList() {
  return db.collection('languages').doc('languages').get().then(res => {
    return res.data().language.sort();
  });
}

export async function getSavedRepoList(user) {
  return db.collection('users').doc(user).get().then(res => {
    const result = res.data().followingRepositories;
    if (result === undefined) return [];
    return result;
  });
}

export async function setSavedRepoList(user, method, value) {
  if (method === 'remove') {
    return db.collection('users').doc(user).update({
      followingRepositories: firebase.firestore.FieldValue.arrayRemove(value)
    });
  }
  return db.collection('users').doc(user).update({
      followingRepositories: firebase.firestore.FieldValue.arrayUnion(value)
    });
  
}

export async function getSavedRepoData(user, index) {
  const list = await getSavedRepoList(user);
  list.sort();
  const data = [];
  let count = 0;
  for (let i = index; i < list.length && count < 20;) {
     // eslint-disable-next-line
    await db.collection('repositories').doc(list[i]).get().then(res => {
      data.push(res.data());
    });
     i+=1;
     count+=1;
  }
  return data;
}