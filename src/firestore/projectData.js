import { db } from '../firebase';

export async function getIssues(id) {
  const issueList = [];
  await db.collection('issues').where('repo_id', '==', id).get().then((res) => {
   
    res.docs.forEach((doc) => {
      issueList.push(doc.data());      
    })
    
  }).catch(() => {
    return [];
  });
  return issueList;
}


export async function getPulls(id) {
  const pullsList = [];
  await db.collection('pulls').where('repo_id', '==', id).get().then((res) => {

    res.docs.forEach((doc) => {
      pullsList.push(doc.data());
    })

  }).catch(() => {
    return [];
  });
  return pullsList;
}