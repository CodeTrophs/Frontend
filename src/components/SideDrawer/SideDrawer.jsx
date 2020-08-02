import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';

import styles from '../../scss/sideDrawer.module.scss';
import * as FirebaseAuth from '../FirebaseAuth';
import UserContext from '../UserContext';
import DrawerToggleButton from './DrawerToggleButton';

const SideDrawer = ({ handleClose, router }) => {
  const [profileDD, setProfileDD] = useState(false);
  const { User, setUser } = useContext(UserContext);

  async function handleLogout(e) {
    e.preventDefault();
    await FirebaseAuth.logout();
    setUser(null);
    router.push('/');
  }

  const toggleDD = () => {
    // eslint-disable-next-line no-unused-expressions
    profileDD === true ? setProfileDD(false) : setProfileDD(true);
  };
  return (
    <div className={styles['side-drawer']}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleClose}
        onClick={handleClose}
        className={styles['close-button']}>
        <DrawerToggleButton />
      </div>
      <div className={styles.profile}>
        <div
          role="button"
          tabIndex="0"
          className={styles['profile-icon']}
          onClick={toggleDD}
          onKeyDown={toggleDD}>
          <img
            src={User !== null ? User.profileImageUrl : '/icons.young-man.svg'}
            alt="me"
            className={styles['header-profile-picture']}
          />
          <p>{User === null ? '' : User.name}</p>
          <img
            src="/SVG/Icon awesome-angle-down.svg"
            style={{ paddingLeft: '10px', width: '20px' }}
            alt=" "
          />
        </div>
        {profileDD && (
          <div className={styles.dropdown}>
            <div className={styles['top-row']}>
              <div className={styles['top-right-col']}>
                <Link href="/setting">
                  <div>
                    <img src="/icons/computer.png" alt="Settings" />
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles['bottom-row']}>
              <Link href="/profile">
                <div className={styles['dd-button']}>My Profile</div>
              </Link>
              <Link href="/createproject">
                <div className={styles['dd-button']}>Create OSP</div>
              </Link>
              <button
                onClick={handleLogout}
                type="button"
                className={styles['dd-button']}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
          <Link href="/feed">
            <p>Feed</p>
          </Link>
          {router.pathname === '/feed' && (
            <hr
              style={{
                height: '3px',
                backgroundColor: '#333',
                border: 'none'
              }}
            />
          )}
        </div>
        <div className={styles.link}>
          <Link href="/organizations">
            <p>Organizations</p>
          </Link>
          {router.pathname === '/organizations' && (
            <hr
              style={{
                height: '3px',
                backgroundColor: '#333',
                border: 'none'
              }}
            />
          )}
        </div>
        <div className={styles.link}>
          <Link href="/saved">
            <p>Saved Repositories</p>
          </Link>
          {router.pathname === '/saved' && (
            <hr
              style={{
                height: '3px',
                backgroundColor: '#333',
                border: 'none'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

SideDrawer.propTypes = {
  handleClose: PropTypes.func.isRequired,
  /* eslint-disable-next-line react/forbid-prop-types */
  router: PropTypes.object.isRequired
};

export default SideDrawer;
