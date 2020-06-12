import { checkUnique } from './firestore/profileSettings';

export async function checkLimit120(id, length) {
  if(length > 120) {
    document.getElementById(id).innerHTML = "Length should not exceed 120 characters.";     
    return false;
  }
  
  document.getElementById(id).innerHTML = '';
  return true;
    
}

export async function checkLimit50(id, length) {

  if (id === 'firstNameError' || id === 'userNameError')
  {
    if(length<1) {
      document.getElementById(id).innerHTML = "This field is required.";
      return false;
    }
  }

  if (length > 50) {
    document.getElementById(id).innerHTML = "Length should not exceed 50 characters.";
    return false;
  }
  
  document.getElementById(id).innerHTML = '';
  return true;
}

export async function checkUrl(id, url) {

  if (url.length === 0) {
    document.getElementById(id).innerHTML = '';
    return true;
  }
  /* eslint-disable-next-line */
  const urlFormat = new RegExp(/^(http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);  
  if (url.match(urlFormat)) {
    document.getElementById(id).innerHTML = '';
    return true;
  }
  
  document.getElementById(id).innerHTML = 'Enter a valid URL.';
  return false;
  
}

export async function checkEmail(id, email) {
  
  // eslint-disable-next-line
  const mailformat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/);
  if (email.match(mailformat)) {
    document.getElementById(id).innerHTML = '';
    return true;
  }
  document.getElementById(id).innerHTML = 'Enter a valid email address.';
  return false;
}

export async function checkUserName(id, userName, uid) {

  const limitCheck = await checkLimit50(id, userName.length);
  if(limitCheck === true) {
    const uniqueStatus = await checkUnique('userName', userName, uid);
    if(uniqueStatus === false)
      document.getElementById(id).innerHTML = "This username is already taken.";
    return uniqueStatus;
  }
  
  return false;
}