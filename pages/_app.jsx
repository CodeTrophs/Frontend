import Head from 'next/head';
import React, { useState } from 'react';

import '../src/css/style.css';
import { UserContext, User } from '../src/components/UserContext';
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  /* eslint-disable-next-line no-unused-vars */
  const [user, setUser] = useState(User);

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
          user
        }}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
