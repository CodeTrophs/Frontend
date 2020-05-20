import React from 'react';

import styles from '../../css/feed.module.css';

export default function FeedIntroduction() {
  return (
    <div className={styles['disp-flex-intro']}>
      <div className={styles.headAlign}>
        <div className={styles.headFeed}>Feed</div>
        <img src="SVG/feedline (2).svg" alt="line" />
        <div className={styles.content}>
          <p>Find an organisation to contribute to</p>
          <p>Cant Find the organisation you are searching for?</p>
          <p>Search below and narrow down your results</p>
        </div>
      </div>
      <div className={styles['intro-image']}>
        <img src="SVG/Group 61.svg" alt="group" />
      </div>
    </div>
  );
}
