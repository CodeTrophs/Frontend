/**
 * This file will contain all the API calls to the server
 * relating to the user.
 */
// import * as authFunctions from '../api/authFunctions';
import http from './http';


const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/discussion/`;

export const getDiscussion = async (name) => {
    return new Promise(async (resolve, reject) => {
      try {
        const repourl = `${baseURL}${name}`
        const res = await http.get(repourl);
        // if (res && res.data && res.data.data) {
        //   console.log(res.data)
        // }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };
  
  
  export const postDiscussion = async (name,question) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = {
          question,
          repository: name
        }
        const res = await http.post(`${baseURL}`,data);
        // if (res && res.data && res.data.data) {
        //   console.log(res.data)
        // }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };
  