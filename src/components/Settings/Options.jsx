import React, { useState } from 'react';

import styles from '../../css/settings.module.css';
import Aboutus from './AboutUs';
import Basicinfo from './BasicInfo';
import Social from './SocialHandle';

const SettingsFinal = () => {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [count, setCount] = useState(1);

  const basic = () => {
    setState1(true);
    setState2(false);
    setState3(false);
    setCount(1);
  };
  const about = () => {
    setState1(false);
    setState2(true);
    setState3(false);
    setCount(2);
  };
  const skill = () => {
    setState1(false);
    setState2(false);
    setState3(true);
    setCount(3);
  };

  return (
    <div>
      <div className={styles['flexing-first']}>
        <div className={styles.boxes}>
          <div className={styles.flexing}>
            <div className={styles['number-page']}>
              <p>{`0${count}`}</p>
            </div>
            <div className={styles['number-page-small']}>
              <p>/03</p>
            </div>
          </div>
          <div className={styles['option-flex']}>
            <button
              type="button"
              onClick={basic}
              style={{ background: state1 ? '#00CACA' : 'white' }}
              className={styles.options}>
              Basic Information
            </button>
            <button
              type="button"
              onClick={about}
              style={{ background: state2 ? '#00CACA' : 'white' }}
              className={styles.options}>
              About You
            </button>
            <button
              type="button"
              onClick={skill}
              style={{ background: state3 ? '#00CACA' : 'white' }}
              className={styles.options}>
              Socials
            </button>
          </div>
        </div>
        <div
          className={styles.boxes2}
          style={{ display: state1 ? 'block' : 'none' }}>
          <Basicinfo />
        </div>
        <div
          className={styles.boxes2}
          style={{ display: state2 ? 'block' : 'none' }}>
          <Aboutus />
        </div>
        <div
          className={styles.boxes2}
          style={{ display: state3 ? 'block' : 'none' }}>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default SettingsFinal;
