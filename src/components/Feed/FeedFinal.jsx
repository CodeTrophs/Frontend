import React, { useState, useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { toast } from 'react-toastify';

import { getRepos, getLanguageList } from '../../firestore/feedData';
import styles from '../../scss/feed.module.scss';
import Card from '../FeedCard';
import LinearLoader from '../LinearLoader';
import SearchBar from '../SearchBar';
import Spinner from '../Spinner';
import FeedIntroduction from './FeedIntro';
import FeedLang from './TopLang';
import FeedOrg from './TopOrg';
import FeedTag from './TopTags';
// import ProjectProfile from '../profile/projectProfile';

export default function FeedFinal() {

  const [pageLoading, setPageLoading] = useState(true);
  const [currentLastNodeId, setCurrentLastNodeId] = useState(null);         // Node id to start after
  const [repoList, setRepoList] = useState([]);
  const [reachedEnd, setReachedEnd] = useState(false);                      // Infinite Scrolling : End Reached
  const [filterLanguage, setFilterLanguage] = useState('All');
  const [searchRepoQuery, setSearchRepoQuery] = useState('');
  const [paramsChanged, setParamsChanged] = useState(false);                // To call getNextRepos() after state has been changed when filters are set
  const [reposLoading, setReposLoading] = useState(false);
  const [languageList, setLanguageList] = useState([]);
  const [sortMethod, setSortMethod] = useState('node_id');
  const [sortOrder, setSortOrder] = useState('asc');
    // Fetch the Repositories

  async function getNextRepos() {

    getRepos(currentLastNodeId, searchRepoQuery, filterLanguage, sortMethod, sortOrder).then(resp => {
      const res = [];
      let lastDoc = null;
      if (resp === null) {
        toast.error('Some Error Occurred! Please Refresh the Page.');
        setReachedEnd(true);
      }
      else {
        resp.docs.forEach(doc => {
          res.push(doc.data());
          lastDoc = doc;
        });
        if (res !== null && res.length > 0) {
          if (res.length < 20) {
            setReachedEnd(true);
          }
          else
            setReachedEnd(false);
          setRepoList([...repoList, res].flat());
          setCurrentLastNodeId(lastDoc);
        }
        if (res !== null && res.length === 0) {
          setReachedEnd(true);
        }
      }
        setPageLoading(false);
        setReposLoading(false);
      });

  }

  async function getLanguages() {
    getLanguageList().then(res => {
      setLanguageList(res);
    });
  }

  useEffect(() => {
    getNextRepos();
    getLanguages();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (sortOrder === 'asc') {
      setCurrentLastNodeId(null);
    }
    else
    setCurrentLastNodeId({});
    setRepoList([]);
    setReposLoading(true);
    if (searchRepoQuery !== '' && sortMethod === 'full_name') {
      setSortMethod('node_id');
    }
    setParamsChanged(!paramsChanged);
  }, [filterLanguage, searchRepoQuery, sortMethod, sortOrder]);

  useEffect(() => {
    getNextRepos();
  }, [paramsChanged]);


  if (pageLoading)
    return (<Spinner />);

  return (
    <div>
      <FeedIntroduction />
      <SearchBar
        page="feed"
        languageList={languageList}
        languageFilter={(language) => { setFilterLanguage(language); }}
        searchFilter={(repoName) => setSearchRepoQuery(repoName)}
        sortMethod={(method) => setSortMethod(method)}
        sortOrder={(order)=>setSortOrder(order)}
        actualSortMethodsList={['node_id','full_name','forks','open_issues','watchers','pushed_at']}
        duplicateSortMethodsList={['None','Full Name', 'Forks', 'Open Issues', 'Watchers', 'Creation Date']}
      />
      <div className={styles['disp-flex-bottom']}>
        <div>
          <FeedLang />
          <FeedOrg />
          <FeedTag />
        </div>
        {reposLoading === false &&
          <InfiniteScroll
            dataLength={repoList.length}
            next={getNextRepos}
            hasMore={!reachedEnd}
            scrollThreshold="95%"
            style={{ paddingTop: "1rem" }}
            loader={<LinearLoader />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                {repoList.length > 0 ? <b>Yay! You have seen it all</b> : <b style={{ color: "red" }}>No Repositories found!</b>}
              </p>
            }
          >
            {repoList.map(repo => {
              return <Card key={repo.id} repo={repo} />
            })}
          </InfiniteScroll>}
        {reposLoading === true && <LinearLoader />}
      </div>
    </div>
  );
}
