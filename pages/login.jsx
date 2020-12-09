/*
  This Component is the middle ware for login route. It will get the token and status of authorization from backend.
  If auth is success it will store token in localStorage.
  If auth is failed then it will redirect to homepage.
*/
import { useRouter } from 'next/router';
import React, { useEffect, useContext } from 'react';

import * as authFunctions from '../src/api/authFunctions';
import Spinner from '../src/components/Spinner';
import UserContext from '../src/components/UserContext';
import * as userService from '../src/services/user';

export default function loginMiddleWare() {
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  async function loginUser() {
    try {
      if (router.query.status === '200') {
        // Set logged In here
        // Redirect to feed page
        // console.log(router.query.token);
        localStorage.setItem('token', router.query.token);

        const res = await userService.getProfile();
        // Set the USer Context for the New User here
        // eslint disable-next-line
        setUser({
          uid: res.data.data._id,
          name: res.data.data.name,
          profileImageUrl: res.data.data.profileImage
        });

        router.replace('/feed');
      } else {
        authFunctions.logout();
      }
    } catch (errors) {
      authFunctions.logout();
    }
  }
  useEffect(() => {
    loginUser();
  }, []);
  return <Spinner />;
}
