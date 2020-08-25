import React from 'react';

import Adsense from '../src/components/Adsense';
import Header from '../src/views/Header';
import SavedRepos from '../src/views/SavedRepos';

function SavedPage() {
  return (
    <div>
      <Header />
      <Adsense />
      <SavedRepos />
    </div>
  );
}

export default SavedPage;
