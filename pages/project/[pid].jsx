import React, { useState } from 'react';

import Discussion from '../../src/components/Feed/Discussion';
import ProjectInfo from '../../src/components/Feed/ProjectInfo';
import Header from '../../src/components/Header';
import styles from '../../src/css/project.module.css';

const project = () => {
  const [Tab, setTab] = useState('issues');

  const changeTab = (tab) => {
    setTab(tab);
  };

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
          <ProjectInfo page={Tab} />
        </div>
        <Discussion className={styles['right-col']} />
      </div>
    </div>
  );
};

export default project;
