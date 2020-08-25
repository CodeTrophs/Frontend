import React from 'react';

import Adsense from '../src/components/Adsense';

import BoxProfile from '../src/components/Profile/ProfileBox';
import Header from '../src/views/Header';

function Profile() {
  return (
    <div>
      <Header />
      <Adsense />
      <BoxProfile />
    </div>
  );
}

export default Profile;
