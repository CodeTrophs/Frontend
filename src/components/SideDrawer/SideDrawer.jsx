import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from '../../css/sideDrawer.module.scss';
import DrawerToggleButton from './DrawerToggleButton';

const SideDrawer = ({ handleClose, router }) => {
  const [profileDD, setProfileDD] = useState(false);

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
            src="/icons/young-man.svg"
            alt=" "
            className={styles['header-profile-picture']}
          />
          <p>Ali Zahir</p>
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
                <img src="/icons/computer.png" alt=" " />
              </div>
            </div>
            <div className={styles['bottom-row']}>
              <Link href="/profile">
                <div className={styles['dd-button']}>My Profile</div>
              </Link>
              <Link href="/createproject">
                <div className={styles['dd-button']}>Create OSP</div>
              </Link>
              <Link href="/">
                <div className={styles['dd-button']}>Logout</div>
              </Link>
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
          <Link href="/howtowork">
            <p>How To Work</p>
          </Link>
          {router.pathname === '/howtowork' && (
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
