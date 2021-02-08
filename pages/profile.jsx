import React from 'react';

// import AdDisplay from '../src/components/AdComponent';

import Header from '../src/components/Header';
import BoxProfile from '../src/components/Profile/ProfileBox';
import ProtectedRoute from '../src/components/ProtectedRoute';

function Profile() {
  return (
    <ProtectedRoute>
      <Header />
      {/* <AdDisplay /> */}
      <BoxProfile />
    </ProtectedRoute>
  );
}

export default Profile;
