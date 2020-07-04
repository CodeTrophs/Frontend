import React, { useState, useEffect, useContext } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { toast } from 'react-toastify';

import {  getSavedRepoList, setSavedRepoList, getSavedRepoData } from '../firestore/feedData';
import styles from '../scss/savedRepos.module.scss';
import Card from './FeedCard';
import LinearLoader from './LinearLoader';
import Spinner from './Spinner';
import UserContext from './UserContext';

export default function SavedRepos() {

  const { User } = useContext(UserContext);
  const [pageLoading, setPageLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);                              // Node id to start after
  const [repoList, setRepoList] = useState([]);                             // All Repositories List
  const [reachedEnd, setReachedEnd] = useState(false);                      // Infinite Scrolling : End Reached
  const [savedRepos, setSavedRepos] = useState([]);                         // Saved Repos List

  // Fetch the Repositories

  async function getNextRepos() {
    getSavedRepoData(User.uid, startIndex).then(res => {
      if (res === null) {
        toast.error('Some Error Occurred! Please Refresh the Page.');
        setReachedEnd(true);
      }
      else
        if (res.length > 0) {
          if (res.length < 10) {
            setReachedEnd(true);
          }
          else
            setReachedEnd(false);
          setRepoList([...repoList, res].flat());
          setStartIndex((repoList.length + res.length));
        }
      if (res.length === 0) {
        setReachedEnd(true);
      }
      setPageLoading(false);
    });
  }
  // Call Required functions
  async function InitialLoad() {
    getSavedRepoList(User.uid).then(res => {
      setSavedRepos(res);
      getNextRepos();
    });
  }
  // Initial Rendering
  useEffect(() => {
    if (User) {
      InitialLoad();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [User]);

  // Change Saved Repo List depending on method either to remove or to add
  const changeSavedList = async (nodeId, method) => {
    if (User) {
      if (method === 'remove') {
        setSavedRepos([...savedRepos.filter(id => id !== nodeId)]);
        setStartIndex(startIndex - 1);
      }
      else {
        setSavedRepos([...savedRepos, nodeId]);
        setStartIndex(startIndex + 1);
      }
      return setSavedRepoList(User.uid, method, nodeId).then(() => {
        return "complete";
      });
    }
    return "complete";
  }

  if (pageLoading)
    return (<Spinner />);

  return (
    <div className={styles.savedReposDiv}>
      <h1> Saved Repositories <hr /> </h1>
          <InfiniteScroll
            dataLength={repoList.length}
            next={getNextRepos}
            hasMore={!reachedEnd}
            scrollThreshold="95%"
            style={{ paddingTop: "1rem" }}
            loader={<LinearLoader />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                {repoList.length > 0 ? <b>Yay! You have seen it all</b> : <b style={{ color: "red" }}>No Saved Repositories!</b>}
              </p>
            }
          >
            {repoList.map(repo => {
              return (
                <Card
                  key={repo.id}
                  repo={repo}
                  isSaved={savedRepos.find(id => id === repo.node_id) !== undefined}
                  changeSaveOption={async (method) => { return changeSavedList(repo.node_id, method); }}
                />
              )
            })}
          </InfiniteScroll>
    </div>
  );
}
