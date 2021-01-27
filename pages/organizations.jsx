import React from 'react';

import Header from '../src/components/Header';
import OrganisationFinal from '../src/components/Organisation/OrganisationFinal';
import ProtectedRoute from '../src/components/ProtectedRoute';

const organizations = () => {
  return (
    <ProtectedRoute>
      <Header />
      <OrganisationFinal />
    </ProtectedRoute>
  );
};

export default organizations;
