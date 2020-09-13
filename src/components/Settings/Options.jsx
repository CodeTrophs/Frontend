import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from '../../scss/settings.module.scss';
import { getProfile } from '../../services/user';
import Spinner from '../Spinner';
import UserContext from '../UserContext';
import AboutYou from './AboutYou';
import Social from './SocialHandle';

const SettingsFinal = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showSocial, setShowSocial] = useState(false);
  const [LoggedInUser, setLoggedInUser] = useState(null);
  const [PageLoading, setPageLoading] = useState(true);
  const { User } = useContext(UserContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function getBasicInfo() {
      try {
        const result = await getProfile();
        if (result.status === 200) {
          setLoggedInUser(result.data.data);
        }
      } catch (result) {
        toast.error(`${result.status} : ${result.message}`);
      }
      setPageLoading(false);
    }
    if (User) getBasicInfo();
  }, [User]);

  const about = () => {
    setShowAbout(true);
    setShowSocial(false);
    setCount(1);
  };
  const skill = () => {
    setShowAbout(false);
    setShowSocial(true);
    setCount(2);
  };
  if (PageLoading) return <Spinner />;

  return (
    <div style={{ width: '95%', margin: '20px auto' }}>
      <div className={styles['flexing-first']}>
        <div className={styles.boxes}>
          <div className={styles.flexing}>
            <div className={styles['number-page']}>
              <p>0{count}</p>
            </div>
            <div className={styles['number-page-small']}>
              <p>/02</p>
            </div>
          </div>
          <div className={styles['option-flex']}>
            <button
              type="button"
              onClick={about}
              style={{
                background: showAbout ? '#00CACA' : 'white',

                color: showAbout ? 'white' : 'black'
              }}
              className={styles.options}>
              About You
            </button>
            <button
              type="button"
              onClick={skill}
              style={{
                background: showSocial ? '#00CACA' : 'white',

                color: showSocial ? 'white' : 'black'
              }}
              className={styles.options}>
              Socials
            </button>
          </div>
        </div>

        <div
          className={styles.boxes2}
          style={{ display: showAbout ? 'block' : 'none' }}>
          <AboutYou UserData={LoggedInUser} />
        </div>
        <div
          className={styles.boxes2}
          style={{ display: showSocial ? 'block' : 'none' }}>
          <Social UserData={LoggedInUser} />
        </div>
      </div>
    </div>
  );
};

export default SettingsFinal;
