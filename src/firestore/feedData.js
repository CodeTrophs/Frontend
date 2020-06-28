import {db} from '../firebase';
// get repositories without any filter
export async function getRepos(nodeId, searchRepo, filterLanguage) {

  let firstPage = db.collection('repositories').orderBy('node_id').limit(10).startAfter(nodeId);
  
  if (filterLanguage !== 'All')
    firstPage = db.collection('repositories').orderBy('node_id').where('language', '==', filterLanguage).limit(10).startAfter(nodeId);
  
  if (searchRepo !== '')
    firstPage = db.collection('repositories').orderBy('node_id').where('full_name','==',searchRepo).limit(10).startAfter(nodeId);
    // firstPage = db.collection('repositories').orderBy('node_id').where('full_name', '>=', + '\uf8ff' + searchRepo).where('full_name', '<=', searchRepo).limit(10).startAfter(nodeId);

  if (filterLanguage !== 'All' && searchRepo !== '')
    firstPage = db.collection('repositories').orderBy('node_id').where('full_name', '==', searchRepo)
      .where('language', '==', filterLanguage).limit(10).startAfter(nodeId);

  const data = [];
  return firstPage.get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  }).catch(() => {
    return null;
  });
}

export async function getLanguageList() {
  return db.collection('languages').doc('languages').get().then(res => {
    return res.data().language.sort();
  });
}
