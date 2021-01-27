import Router from 'next/router';
import React, { useEffect, useState, useContext } from 'react';

import * as authFunctions from '../api/authFunctions';
import Spinner from './Spinner';
import UserContext from './UserContext';

const ProtectedRoute = props => {
  const { User, setUser } = useContext(UserContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (User && User.token && User.uid) {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem('user');
    function updation() {
      const verificationResult = authFunctions.verifySecuredToken(token);

      if (verificationResult !== null) {
        setUser({
          name: verificationResult.name,
          token: verificationResult.token,
          uid: verificationResult.uid,
          profileImageUrl: verificationResult.profileImageUrl
        });
        if (Router.pathname === '/') {
          Router.replace('/feed');
        } else {
          setLoading(false);
        }
      } else {
        Router.replace('/');
      }
    }

    if (token) {
      updation();
    } else {
      Router.replace('/');
    }
  }, []);

  if (isLoading) return <Spinner />;

  return props.children;
};

export default ProtectedRoute;
