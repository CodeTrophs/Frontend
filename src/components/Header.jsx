import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../css/header.module.css';

export default function Header() {
  const router = useRouter();

  const [profileDD, setProfileDD] = useState(false);

  const toggleDD = () => {
    // eslint-disable-next-line no-unused-expressions
    profileDD === true ? setProfileDD(false) : setProfileDD(true);
  };

  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <img
            className={styles['header-logo']}
            src="/logo/web_logo.png"
            alt=""
          />
        </Link>
      </div>
      {router.pathname !== '/' && (
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/feed">
              <p>Feed</p>
            </Link>
            {router.pathname === '/feed' && (
              <hr
                style={{
                  width: '30%',
                  height: '3px',
                  backgroundColor: '#333',
                  border: 'none',
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
                  width: '30%',
                  height: '3px',
                  backgroundColor: '#333',
                  border: 'none',
                }}
              />
            )}
          </div>
          <div className={styles.link}>
            <Link href="/howToWork">
              <p>How To Work</p>
            </Link>
            {router.pathname === '/howToWork' && (
              <hr
                style={{
                  width: '30%',
                  height: '3px',
                  backgroundColor: '#333',
                  border: 'none',
                }}
              />
            )}
          </div>
        </div>
      )}
      {router.pathname !== '/' && (
        <div className={styles.profile}>
          <div
            role="button"
            tabIndex="0"
            className={styles['profile-icon']}
            onClick={toggleDD}
            onKeyDown={toggleDD}
          >
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
                <div className={styles['top-left-col']}>
                  <img src="/icons/young-man.png" alt=" " />
                  <p>Ali Zahir</p>
                </div>
                <div className={styles['top-right-col']}>
                  <img src="/icons/computer.png" alt=" " />
                </div>
              </div>
              <div className={styles['bottom-row']}>
                <div className={styles['dd-button']}>My Profile</div>
                <div className={styles['dd-button']}>Create OSP</div>
                <div className={styles['dd-button']}>Logout</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
