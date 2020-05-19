import React from 'react';

import styles from '../../css/settings.module.css';

const Social = () => (
  <div>
    <div className={styles['basic-head']}>
      <p>Where can we find you online?</p>
    </div>
    <div className={styles.qns}>
      <div className={styles.flexing}>
        <div>
          <p>Website</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon feather-globe.svg" alt="globe" />
        </div>
      </div>
      <input className={styles.input} placeholder="https://your-website.com/" />
      <div className={styles.flexing}>
        <div>
          <p>Github</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-github-alt.svg" alt="git" />
        </div>
      </div>
      <input className={styles.input} placeholder="https://github.com/" />
      <div className={styles.flexing}>
        <div>
          <p>LinkedIn</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-linkedin.svg" alt="linkedin" />
        </div>
      </div>
      <input className={styles.input} placeholder="https://linkedin.com/in/" />

      <div className={styles.flexing}>
        <div>
          <p>Twitter</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-twitter.svg" alt="tweet" />
        </div>
      </div>
      <input className={styles.input} placeholder="https://twitter.com/" />
    </div>
  </div>
);
export default Social;
