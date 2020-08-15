import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect } from 'react';

import styles from '../scss/header.module.scss';
import * as FirebaseAuth from './FirebaseAuth';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import Spinner from './Spinner';
import ToTop from './ToTop';
import UserContext from './UserContext';

export default function Header() {
  const router = useRouter();
  const { User, setUser } = useContext(UserContext);
  const [profileDD, setProfileDD] = useState(false);
  const [sideDrawer, setSideDrawer] = useState(false);
  const [Loading, setLoading] = useState(true);

  // const [MissingData, setMissingData] = useState(false);

  useEffect(() => {
    if (User) {
      setUser(User);
    }
    setLoading(false);
  }, [User]);

  if (Loading) return <Spinner />;

  const toggleDD = () => {
    // eslint-disable-next-line no-unused-expressions
    profileDD === true ? setProfileDD(false) : setProfileDD(true);
  };
  const toggleSD = () => {
    // eslint-disable-next-line no-unused-expressions
    sideDrawer === true ? setSideDrawer(false) : setSideDrawer(true);
  };

  async function handleLogout(e) {
    e.preventDefault();
    await FirebaseAuth.logout();
    setUser(null);
    router.push('/');
  }

  return (
    <div className={styles.header}>
      <ToTop />
      <div>
        <Link href={User ? '/feed' : '/'}>
          <img
            className={styles['header-logo']}
            src="/logo/web_logo.png"
            alt=""
          />
        </Link>
      </div>
      {router.pathname !== '/' &&
      router.pathname !== '/toporg' &&
      router.pathname !== '/toplang' ? (
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
                  border: 'none'
                }}
              />
            )}
          </div>
          {/*
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
                  border: 'none'
                }}
              />
            )}
          </div>
          */}
          <div className={styles.link}>
            <Link href="/saved">
              <p>Saved Repositories</p>
            </Link>
            {router.pathname === '/saved' && (
              <hr
                style={{
                  width: '30%',
                  height: '3px',
                  backgroundColor: '#333',
                  border: 'none'
                }}
              />
            )}
          </div>
        </div>
      ) : null}
      <div tabIndex={0} role="button" onKeyDown={toggleSD} onClick={toggleSD}>
        {router.pathname !== '/' && (
          <DrawerToggleButton className={styles['toggle-hamburger']} />
        )}
      </div>
      {sideDrawer && <SideDrawer handleClose={toggleSD} router={router} />}
      {router.pathname !== '/' &&
      router.pathname !== '/toporg' &&
      router.pathname !== '/toplang' ? (
        <div className={styles.profile}>
          <div
            role="button"
            tabIndex="0"
            className={styles['profile-icon']}
            onClick={toggleDD}
            onKeyDown={toggleDD}>
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
              className={styles['header-profile-picture']}
            />
            {User !== null && <p> {User.name} </p>}
            <img
              src="/SVG/Icon awesome-angle-down.svg"
              style={{ paddingLeft: '10px', width: '20px' }}
              alt=" "
            />
          </div>

          {profileDD && (
            <div className={styles.dropdown}>
              
                <div className={styles['bottom-row']}>
                <Link href="/profile">
                    <div
                      className={styles['dd-button']}
                      style={{ backgroundColor: '#029843' }}
                    >
                      My Profile
                    </div>
                </Link>
                
                <Link href="/setting">
                    <div className={styles['dd-button']}
                      style={{
                        backgroundColor: '#fff',
                        border:'1px solid #333',
                        color: '#000'
                      }}
                    >
                      Settings  <img src="/icons/computer.png" alt="Settings" style={{marginLeft:"1rem", width: "25px" }}/>
                    </div>
                </Link>
                
                {/* <Link href="/createproject">
                    <div className={styles['dd-button']}
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #333',
                        color: '#000'
                      }}
                    >
                      Create OSP
                    </div>
                </Link> */}
               
                <button
                  type="button"
                  onClick={handleLogout}
                  className={styles['dd-button']}
                  style={{
                    backgroundColor: '#fe5e44',
                    border: 'none',
                    color: '#fff'
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
