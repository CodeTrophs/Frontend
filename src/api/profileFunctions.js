import Axios from 'axios';

import * as authFunctions from './authFunctions';

// Get User profile

export async function getProfile() {
  
  const verificationResult = authFunctions.verifySecuredToken(localStorage.getItem('osc-app-token'));
  if (verificationResult === null) {
    return {status: 401,message:'Token Verification Failed. Please login again !'};
  }

  return Axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/user/profile`,
    {
      headers: {
        Authorization: `Bearer ${  verificationResult.token}`
      }
    }
  ).then((res) => {
    return {status:200, data: res.data.data };
  }).catch((err) => {
    return {status : err.response.data.status, message: err.response.data.message};
  });
}

// Update Basic Profile

export async function updateProfile(updateData) {

  const verificationResult = authFunctions.verifySecuredToken(localStorage.getItem('osc-app-token'));
  if (verificationResult === null) {
    return { status: 401, data: { message: 'Token Verification Failed. Please login again !' } };
  }

  return Axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/user/profile`, updateData, {
    headers: {
      Authorization: `Bearer ${  verificationResult.token}`
    }
  }).then(() => {
    return { status: 200 }; 
  }).catch((err) => {
    return { status: 400 , data : err.response.data  };
  });
}

// Update Social Links of the User

export async function updateSocials(receivedData) {

  const verificationResult = authFunctions.verifySecuredToken(localStorage.getItem('osc-app-token'));
  if (verificationResult === null) {
    return { status: 401, data: { message: 'Token Verification Failed. Please login again !' } };
  }
  const data = receivedData;
  if (data.website === '')
    delete data.website;

  if (data.github === '')
    delete data.github;

  if (data.linkedin === '')
    delete data.linkedin;

  if (data.twitter === '')
    delete data.twitter;

  return Axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/user/socials`, data, {
    headers: {
      Authorization: `Bearer ${  verificationResult.token}`
    }
  }).then(() => {
    return { status: 200 };
  }).catch((err) => {
    return { status: 400 , data :err.response.data };
  });
}

