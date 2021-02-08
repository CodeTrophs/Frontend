import React from 'react';

// import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import ProtectedRoute from '../src/components/ProtectedRoute';
import StarredRepos from '../src/components/StarredRepos';

function StarredPage() {
  return (
    <ProtectedRoute>
      <Header />
      {/* <AdDisplay /> */}
      <StarredRepos />
    </ProtectedRoute>
  );
}

export default StarredPage;
