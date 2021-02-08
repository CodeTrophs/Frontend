import React from 'react';

import Header from '../src/components/Header';
import ProtectedRoute from '../src/components/ProtectedRoute';
import TopLanguage from '../src/components/TopLanguages';

const lang = () => (
  <ProtectedRoute>
    <Header />
    <TopLanguage />
  </ProtectedRoute>
);


export default lang;
