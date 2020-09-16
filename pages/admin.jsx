import React, { useContext, useState } from 'react';

import AddSkill from '../src/components/Admin/AddSkill';
import CreateSkill from '../src/components/Admin/CreateSkill';
import Reports from '../src/components/Admin/Reports';
import UserContext from '../src/components/UserContext';
import styles from '../src/scss/admin.module.scss';

const admin = () => {

  const [Tab, setTab] = useState('addSkill');
  const { User } = useContext(UserContext);

  const changeTab = (tab) => {
    setTab(tab);
  };


  return (
    <div>
      <div className={styles.container}>
        <div className={styles['left-col']}>
          <div className={styles.sidenav}>

            <img
              src={
                User !== null && User.profileImageUrl
                  ? User.profileImageUrl
                  : '/SVG/user.svg'
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/SVG/user.svg';
              }}
              alt="me"
              className={styles.sidenavProfilePicture}
            />
            {User !== null ? <p className={styles.username}> {User.name} </p> : <p className={styles.username}>User</p>}

            <div className={styles.tabs}>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  changeTab('addSkill');
                }}
                className={Tab === 'addSkill' ? styles['active-tab'] : styles.tab}
                onClick={() => changeTab('addSkill')}>
                Add Skills
              </div>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  changeTab('reports');
                }}
                className={
                  Tab === 'reports' ? styles['active-tab'] : styles.tab
                }
                onClick={() => changeTab('reports')}>
                Reports
              </div>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  changeTab('feed');
                }}
                className={
                  Tab === 'feed' ? styles['active-tab'] : styles.tab
                }
                onClick={() => changeTab('feed')}>
                Feed
              </div>
            </div>
          </div>
          <div className={styles.content}>
            {Tab === 'addSkill' && <CreateSkill /> }
            {Tab === 'reports' && <Reports /> }
            {Tab === 'feed' && <AddSkill /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default admin;
