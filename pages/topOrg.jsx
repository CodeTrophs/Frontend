import React from 'react';

import Header from '../src/components/Header';
import ProtectedRoute from '../src/components/ProtectedRoute';
import TopOrganisation from '../src/components/TopOrganisations';

const org = () => (
  <ProtectedRoute>
    <Header />
    <TopOrganisation />
  </ProtectedRoute>
);

export default org;
