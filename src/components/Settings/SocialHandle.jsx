import React from 'react';

import styles from '../../scss/settings.module.scss';

const Social = () => (
  <div>
    <div className={styles['basic-head']}>
      <h4 style={{ fontWeight: '500' }}>Where can we find you online?</h4>
    </div>
    <div className={styles.qns}>
      <div className={styles['flexing-links']}>
        <div>
          <p>Website</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon feather-globe.svg" alt="globe" />
        </div>
      </div>
      <input className={styles.input} placeholder="https://your-website.com/" />
      <div className={styles['flexing-links']}>
        <div>
          <p>Github</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-github-alt.svg" alt="git" />
        </div>
      </div>
      <input className={styles.input} placeholder="https://github.com/" />
      <div className={styles['flexing-links']}>
        <div>
          <p>LinkedIn</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-linkedin.svg" alt="linkedin" />
        </div>
      </div>
      <input className={styles.input} placeholder="https://linkedin.com/in/" />

      <div className={styles['flexing-links']}>
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
