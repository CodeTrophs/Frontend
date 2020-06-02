import Head from 'next/head';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';

import '../src/css/style.css';
import UserContext from '../src/components/UserContext';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  /* eslint-disable-next-line no-unused-vars */
  const [User, setUser] = useState(null);

  useEffect(()=>{
    let result = localStorage.getItem('User');
    if (result !== null)
    {
      result = JSON.parse(result);
      setUser({
        name: result.Name,
        email:result.Email
      });

      if(Router.pathname === '/' )
        Router.push('/feed');
    }
    else
    {
      Router.replace('/');
    }
  },[]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>OpenSourceCode</title>
      </Head>

      <UserContext.Provider
        value={{
          User,
          setUser
        }}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
