import { checkUnique } from './firestore/profileSettings';

export function checkLengthLimit(length, allowedLength, minLength = 0) {
  if (minLength === 1 && length < minLength) {
    return `This field is required.`;
  }
  if (length < minLength)
    return `Minimum length required for the field is ${minLength} characters.`;
  if (length > allowedLength) {
    return `Length cannot exceed more than ${allowedLength} characters.`;
  }
  return null;

}

export function checkUrl(url) {

  if (url.length === 0) {
    return null;
  }
  /* eslint-disable-next-line */
  const urlFormat = new RegExp(/^(http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
  if (url.match(urlFormat)) {
    return null;
  }
  return 'Please enter a valid URL.';
}

export function checkEmail(email) {
  
  // eslint-disable-next-line
  const mailformat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/);
  if (email.match(mailformat)) {
    return null;
  }
  return  'Please enter a valid email address.';
}

export async function checkUserName(userName, uid) {

  const limitCheck = checkLengthLimit(userName.length, 50, 1);
  if(limitCheck === null) {
    const uniqueStatus = await checkUnique('userName', userName, uid);
    if(uniqueStatus === false)
      return "This username is already taken.";
    return null;
  }
  
  return limitCheck;
}