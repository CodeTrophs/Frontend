import React from 'react';

import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import FormOsp from '../src/components/Osp/OspForm';
import HeadOsp from '../src/components/Osp/OspHead';
import ProtectedRoute from '../src/components/ProtectedRoute';

const createproject = () => (
  <ProtectedRoute>
    <Header />
    <HeadOsp />
    <AdDisplay />
    <FormOsp />
  </ProtectedRoute>
);
export default createproject;
