import Router from 'next/router';
import React, { useEffect, useState } from 'react';

import AdDisplay from '../../src/components/AdComponent';
import Discussion from '../../src/components/Feed/Discussion';
import Issues from '../../src/components/Feed/Issues';
import PullRequests from '../../src/components/Feed/Pull-requests';
import Header from '../../src/components/Header';
import Spinner from '../../src/components/Spinner';
import { getRepo } from '../../src/firestore/projectData';
import styles from '../../src/scss/project.module.scss';

const project = () => {
  const [repoUrl, setRepoUrl] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);


  useEffect(() => {
    if (Router.query.pid) {
      getRepo(Router.query.pid).then((res) => {
        setRepoUrl(res);
      });
      setPageLoading(false);
    }
  }, []);

  const [Tab, setTab] = useState('issues');

  const changeTab = (tab) => {
    setTab(tab);
  };

  if (pageLoading) return <Spinner />;

  return (
    <div>
      <Header />
      <AdDisplay />
      <div className={styles.container}>
        <div className={styles['left-col']}>
          <div className={styles.tabs}>
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {
                changeTab('issues');
              }}
              className={Tab === 'issues' ? styles['active-tab'] : styles.tab}
              onClick={() => changeTab('issues')}>
              ISSUES
            </div>
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {
                changeTab('pull-requests');
              }}
              className={
                Tab === 'pull-requests' ? styles['active-tab'] : styles.tab
              }
              onClick={() => changeTab('pull-requests')}>
              PULL REQUESTS
            </div>
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {
                changeTab('discussion');
              }}
              className={
                Tab === 'discussion' ? styles['active-tab'] : styles.tab
              }
              onClick={() => changeTab('discussion')}>
              DISCUSSION
            </div>
          </div>
          { Tab === 'issues' && <Issues url={repoUrl} /> }
          { Tab === 'pull-requests' && <PullRequests url={repoUrl} /> }
          {Tab === 'discussion' && <Discussion className={styles['right-col']} /> }
        </div>
      </div>
    </div>
  );
};

export default project;
