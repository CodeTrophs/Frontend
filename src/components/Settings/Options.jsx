import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from '../../scss/settings.module.scss';
import { getProfile } from '../../services/user';
import Spinner from '../Spinner';
import UserContext from '../UserContext';
import AboutYou from './AboutYou';
import Basicinfo from './BasicInfo';
import Social from './SocialHandle';

const SettingsFinal = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [LoggedInUser, setLoggedInUser] = useState(null);
  const [PageLoading, setPageLoading] = useState(true);
  const { User } = useContext(UserContext);
  // const [count, setCount] = useState(1);

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

  const info = () => {
    setShowInfo(true);
    setShowAbout(false);
    setShowSocial(false);
  };

  const about = () => {
    setShowInfo(false);
    setShowAbout(true);
    setShowSocial(false);
    // setCount(1);
  };
  const skill = () => {
    setShowInfo(false);
    setShowAbout(false);
    setShowSocial(true);
    // setCount(2);
  };
  if (PageLoading) return <Spinner />;

  return (
    <div className={styles.content}>
      <div className={styles['flexing-first']}>
        <img src="/SVG/settings_page.svg" alt="settings" />
      </div>
      <div style={{ marginRight: '10%' }}>
        <div className={styles['option-flex']}>
          <button
            type="button"
            onClick={info}
            style={{
              borderBottom: showInfo ? '6px solid #FFAA1D' : ''
            }}
            className={styles.options}>
            Basic Information
          </button>
          <button
            type="button"
            onClick={about}
            style={{
              borderBottom: showAbout ? '6px solid #FFAA1D' : ''
            }}
            className={styles.options}>
            About You
          </button>
          <button
            type="button"
            onClick={skill}
            style={{
              borderBottom: showSocial ? '6px solid #FFAA1D' : ''
            }}
            className={styles.options}>
            Socials
          </button>
        </div>

        <div
          className={styles.boxes2}
          style={{ display: showInfo ? 'block' : 'none' }}>
          <Basicinfo UserData={LoggedInUser} />
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
