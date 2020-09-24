import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Discussion from '../../src/components/Feed/Discussion';
import Issues from '../../src/components/Feed/Issues';
import PullRequests from '../../src/components/Feed/Pull-requests';
import Header from '../../src/components/Header';
import Spinner from '../../src/components/Spinner';
import styles from '../../src/scss/project.module.scss';
import * as feedService from '../../src/services/feed';

const project = () => {
  const [repoUrl, setRepoUrl] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [repoData, setRepoData] = useState(null);

  async function getRepoInfo() {
    try {
      const res = await feedService.getRepo(
        Router.query.pid.split(' ')[0],
        Router.query.pid.split(' ')[1]
      );
      if (res.status === 200)
        res.data && res.data.data && setRepoData(res.data.data);
    } catch (res) {
      toast.error(`${res.status} : ${res.message}`);
    }
    setPageLoading(false);
  }

  useEffect(() => {
    if (Router.query.pid) {
      setRepoUrl(
        `https://github.com/${Router.query.pid.split(' ')[0]}/${
          Router.query.pid.split(' ')[1]
        }`
      );
      getRepoInfo();
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
      <div className={styles.projectProfile}>
        <div className={styles['card-left-column']}>
          <h1>{repoData.full_name && repoData.full_name.split('/')[1]}</h1>
          <div className={styles['card-left-info']}>
            <div className={styles['org-languages']}>
              <p>
                By{' '}
                <em style={{ color: 'green' }}>
                  {repoData.full_name && repoData.full_name.split('/')[0]}
                </em>{' '}
                | Updated:{' '}
                {repoData.updated_at && repoData.updated_at.slice(0, 10)}
              </p>
              <span className={styles['org-lang-1']}>
                {repoData.language && repoData.language}
              </span>
            </div>
            <p>{repoData.description && repoData.description}</p>
            <div className={styles['git-dev-icons']}>
              <a
                href={repoData.html_url && repoData.html_url}
                target="_blank"
                rel="noreferrer">
                <button
                  type="button"
                  className={styles['github-icon']}
                  disabled={!repoData.html_url}>
                  <img src="/icons/github-icon.png" alt="Github-icon" />
                  <p>Github</p>
                </button>
              </a>
              <a
                href={
                  repoData.html_url && `https://gitpod.io/#${repoData.html_url}`
                }
                target="_blank"
                rel="noreferrer">
                <button
                  type="button"
                  className={styles['gitpod-icon']}
                  disabled={!repoData.html_url}>
                  <img src="/icons/gitPod-icon.png" alt="Gitpod-icon" />
                  <p>Gitpod</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles['card-right-column']}>
          <div className={styles['forks-and-star']}>
            <img src="/icons/star-icon.png" alt="Star" />
            <p>Stars</p>
            <div className={styles['total-forks-and-stars']}>
              <p>
                {repoData.stargazers_count ? repoData.stargazers_count : '0'}
              </p>
            </div>
          </div>
          <div className={styles['forks-and-star']}>
            <img src="/icons/fork-icon.png" alt="Fork" />
            <p>Forks</p>
            <div className={styles['total-forks-and-stars']}>
              <p>{repoData.forks ? repoData.forks : '0'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles['left-col']}>
          <div className={styles.sidenav}>
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
              {/* <div
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
              </div> */}
            </div>
          </div>
          <div className={styles.content}>
            {Tab === 'issues' && <Issues url={repoUrl} />}
            {Tab === 'pull-requests' && <PullRequests url={repoUrl} />}
            {Tab === 'discussion' && (
              <Discussion className={styles['right-col']} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
