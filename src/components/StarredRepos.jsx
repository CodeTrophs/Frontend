import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from 'react-toastify';

import styles from '../scss/starredRepos.module.scss';
import * as feedFunction from '../services/feed';
import Card from './FeedCard';
import LinearLoader from './LinearLoader';
import Spinner from './Spinner';

export default function StarredRepos() {
  const [pageLoading, setPageLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1); // Page No.
  const [repoList, setRepoList] = useState([]); // All Repositories List
  const [reachedEnd, setReachedEnd] = useState(false); // Infinite Scrolling : End Reached
  const [reposLoading, setReposLoading] = useState(true);

  // Fetch the Repositories

  async function getNextRepos() {
    try {
      const res = await feedFunction.getStarredRepos(pageNo);
      res &&
        res.data &&
        res.data.data &&
        setRepoList([...repoList, res.data.data].flat());
      if (res && res.data && res.data.hasNextPage === false) {
        setReachedEnd(true);
      }
      setPageNo(pageNo + 1);
    } catch (res) {
      toast.error(`${res.status} : ${res.message}`);
      setReachedEnd(true);
    }
    setPageLoading(false);
    setReposLoading(false);
  }
  // Call Required functions
  // Initial Rendering
  useEffect(() => {
    getNextRepos();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (pageLoading) return <Spinner />;

  return (
    <div className={styles.starredReposDiv}>
      <h1>
        {' '}
        Starred Repositories <hr />{' '}
      </h1>
      <InfiniteScroll
        dataLength={repoList.length}
        next={getNextRepos}
        hasMore={!reachedEnd}
        scrollThreshold="95%"
        style={{ paddingTop: '1rem' }}
        loader={<LinearLoader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            {repoList.length > 0 ? (
              <b>Yay! You have seen it all</b>
            ) : (
              <b style={{ color: 'red' }}>No Starred Repositories!</b>
            )}
          </p>
        }>
        {repoList.map((repo) => {
          return <Card key={repo.id} repo={repo} isStarredProp />;
        })}
      </InfiniteScroll>
      {reposLoading === true && <LinearLoader />}
    </div>
  );
}
