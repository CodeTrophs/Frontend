import React from 'react';

// import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import StarredRepos from '../src/components/StarredRepos';

function StarredPage() {
  return (
    <div>
      <Header />
      {/* <AdDisplay /> */}
      <StarredRepos />
    </div>
  );
}

export default StarredPage;
