import React from 'react';

import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import SavedRepos from '../src/components/SavedRepos';

function SavedPage() {
  return (
    <div>
      <Header />
      <AdDisplay />
      <SavedRepos />
    </div>
  );
}

export default SavedPage;
