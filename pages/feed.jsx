import React from 'react';

import FeedFinal from '../src/components/Feed/FeedFinal';
import FeedIntroduction from '../src/components/Feed/FeedIntro';
import Header from '../src/components/Header';

import SearchBar from '../src/components/SearchBar';

const feed = () => (
  <div>
    <Header />
    <FeedIntroduction />
    <SearchBar page="feed" />

    <FeedFinal />
  </div>
);

export default feed;
