import React from 'react';

import Card from '../src/components/FeedCard';
// import ProjectProfile from '../src/components/profile/projectProfile';

import Header from '../src/components/Header';
import BoxProfile from '../src/components/profile/profilebox';

function Profile() {
  return (
    <div>
      <Header />
      <BoxProfile />
      <Card />
    </div>
  );
}

export default Profile;
