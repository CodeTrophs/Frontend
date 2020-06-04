import React, { useState } from 'react';

import styles from '../../scss/settings.module.scss';
import Aboutus from './AboutUs';
import Basicinfo from './BasicInfo';
import Social from './SocialHandle';

const SettingsFinal = () => {
  const [showBasic, setShowBasic] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [count, setCount] = useState(1);

  const basic = () => {
    setShowBasic(true);
    setShowAbout(false);
    setShowSocial(false);
    setCount(1);
  };
  const about = () => {
    setShowBasic(false);
    setShowAbout(true);
    setShowSocial(false);
    setCount(2);
  };
  const skill = () => {
    setShowBasic(false);
    setShowAbout(false);
    setShowSocial(true);
    setCount(3);
  };

  return (
    <div style={{ width: '95%', margin: '20px auto' }}>
      <div className={styles['flexing-first']}>
        <div className={styles.boxes}>
          <div className={styles.flexing}>
            <div className={styles['number-page']}>
              <p>0{count}</p>
            </div>
            <div className={styles['number-page-small']}>
              <p>/03</p>
            </div>
          </div>
          <div className={styles['option-flex']}>
            <button
              type="button"
              onClick={basic}
              style={{
                background: showBasic ? '#00CACA' : 'white',
                color: showBasic ? 'white' : 'black'
              }}
              className={styles.options}>
              Basic Information
            </button>
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
          style={{ display: showBasic ? 'block' : 'none' }}>
          <Basicinfo />
        </div>
        <div
          className={styles.boxes2}
          style={{ display: showAbout ? 'block' : 'none' }}>
          <Aboutus />
        </div>
        <div
          className={styles.boxes2}
          style={{ display: showSocial ? 'block' : 'none' }}>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default SettingsFinal;
