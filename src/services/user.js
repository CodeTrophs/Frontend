/**
 * This file will contain all the API calls to the server
 * relating to the user.
 */
import * as authFunctions from '../api/authFunctions';
import http from './http';

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/user`;

export const getProfile = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(`${baseURL}/profile`);
      if (res && res.data && res.data.data) {
        const user = {
          // eslint disable-next-line
          uid: res.data.data._id,
          name: res.data.data.name,
          profileImageUrl: res.data.data.profileImage
        };
        localStorage.setItem('user', authFunctions.secureToken(user));
      }
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateProfile = async (receivedData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.patch(`${baseURL}/profile`, receivedData);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateSocials = async (receivedData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = receivedData;
      if (data.website === '') delete data.website;

      if (data.github === '') delete data.github;

      if (data.linkedin === '') delete data.linkedin;

      if (data.twitter === '') delete data.twitter;
      const res = await http.patch(`${baseURL}/socials`, data);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
