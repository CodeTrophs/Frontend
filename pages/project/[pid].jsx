import Router from 'next/router';
import React, { useEffect, useState } from 'react';

import Discussion from '../../src/components/Feed/Discussion';
import ProjectInfo from '../../src/components/Feed/ProjectInfo';
import Header from '../../src/components/Header';
import Spinner from '../../src/components/Spinner';
import { getIssues, getPulls, getRepo } from '../../src/firestore/projectData';
import styles from '../../src/scss/project.module.scss';

const project = () => {

  const [issueList, setIssueList] = useState([]);
  const [pullsList, setPullsList] = useState([]);
  const [dataList, setDataList] = useState(null);
  const [repoUrl, setRepoUrl] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  async function getIssuesForRepo() {
    getIssues(Router.query.pid).then((res) => {
      setIssueList(res);
    });
  }

  async function getPullsforRepo() {
    getPulls(Router.query.pid).then((res) => {
      setPullsList(res);
      setPageLoading(false);
    });
  }

  useEffect(() => {
    const data = {
      issues: issueList,
      pulls: pullsList,
    };
    setDataList(data);
  },[issueList, pullsList]);

  useEffect(() => {
    if (Router.query.pid) {
      getIssuesForRepo();
      getPullsforRepo();
      getRepo(Router.query.pid).then(res => {
        setRepoUrl(res);
      });
    }
  }, []);

  const [Tab, setTab] = useState('issues');

  const changeTab = (tab) => {
    setTab(tab);
  };

  if(pageLoading) return <Spinner />

  return (
    <div>
      <Header />
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
                changeTab('contribution');
              }}
              className={
                Tab === 'contribution' ? styles['active-tab'] : styles.tab
              }
              onClick={() => changeTab('contribution')}>
              CONTRIBUTION
            </div>
          </div>
          <ProjectInfo page={Tab} data={dataList} url={repoUrl} />
        </div>
        <Discussion className={styles['right-col']} />
      </div>
    </div>
  );
};

export default project;
