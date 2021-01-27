import React from 'react';

// import AdDisplay from '../src/components/AdComponent';

import Header from '../src/components/Header';
import ProtectedRoute from '../src/components/ProtectedRoute';
import Settings from '../src/components/Settings/Options';

const setting = () => (
  <ProtectedRoute>
    <Header />
    {/* <AdDisplay /> */}
    <Settings />
  </ProtectedRoute>
);

export default setting;
