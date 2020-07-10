import firebase,{db} from '../firebase';
/*  ===================================================================================================================================
                                                      Get Repositories 
*/
export async function getRepos(nodeId, searchRepo, languageList, org, sortMethod, sortOrder) {

  let firstPage = db.collection('repositories').orderBy(sortMethod,sortOrder).limit(20).startAfter(nodeId);

                                                  // When All 3 fields are not default
  if (languageList.length !== 0 && searchRepo !== '' && org !== 'All') {          
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('full_name','==',searchRepo).where('language','in',languageList).where('owner.login','==',org).limit(20).startAfter(nodeId);
  }
                                                  // When Search Field and Language List are not Default
  else if (languageList.length !== 0 && searchRepo !== '')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('full_name', '==', searchRepo).where('language', 'in', languageList).limit(20).startAfter(nodeId);
                                                  // When Search Field and Organisation are not Default
  else if (org !== 'All' && searchRepo !== '')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('full_name', '==', searchRepo).where('owner.login', '==', org).limit(20).startAfter(nodeId);
                                                  // When Language List and Organisation are not Default
  else if (languageList.length !== 0 && org !== 'All')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('language', 'in', languageList).where('owner.login','==',org).limit(20).startAfter(nodeId);
                                                  // When Only Language List is Not default  
  else if (languageList.length !== 0)
     firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('language', 'in', languageList).limit(20).startAfter(nodeId);
                                                  // When Only Search Field is Not default
  else if (searchRepo !== '')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('full_name', '==', searchRepo).limit(20).startAfter(nodeId);
                                                  // When Only Organisation is Not default
  else if (org !== 'All')
    firstPage = db.collection('repositories').orderBy(sortMethod, sortOrder).where('owner.login', '==', org).limit(20).startAfter(nodeId);

  return firstPage.get().then(snapshot => {
    return snapshot;
  }).catch(() => {
    return null;
  });
}

/*  ===================================================================================================================================
                                                      Get Language List
*/
export async function getLanguageList() {
  return db.collection('languages').doc('languages').get().then(res => {
    return res.data().language.sort();
  }).catch(() => {
    return [];
  });
}
/*  ===================================================================================================================================
                                                      Get Organisation List
*/
export async function getOrganisationList() {
  return db.collection('organisations').doc('organisations').get().then(res=> {
    return res.data().orgs;
  }).catch(() => {
    return [];
  });
}
/*  ===================================================================================================================================
                                                      Get Repo List Saved By User
*/
export async function getSavedRepoList(user) {
  return db.collection('users').doc(user).get().then(res => {
    const result = res.data().followingRepositories;
    if (result === undefined) return [];
    return result;
  });
}
/*  ===================================================================================================================================
                                                      Set Repositories Saved By User
*/
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
/*  ===================================================================================================================================
                                                      Get Repositories Data Saved By User
*/
export async function getSavedRepoData(user, index) {
  const list = await getSavedRepoList(user);
  list.sort();
  const data = [];
  const listCalled = [];
  let count = 0;
  for (let i = index; i < list.length && count < 10; i+=1,count+=1) {
    listCalled.push(list[i]);  
  }
  if (listCalled.length === 0)
    return data;
  await db.collection('repositories').where('node_id','in',listCalled).get().then(res => {
    res.docs.forEach(doc => {
      data.push(doc.data());
    })  
  });
  return data;
}