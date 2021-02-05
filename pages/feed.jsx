import React from 'react';

import FeedFinal from '../src/components/Feed/FeedFinal';
import Header from '../src/components/Header';
import ProtectedRoute from '../src/components/ProtectedRoute';


const feed = () => (
  <ProtectedRoute>
    <Header />
    <FeedFinal />
  </ProtectedRoute>
);

export default feed;
