import React from 'react';

import styles from '../../scss/feed.module.scss';

export default function FeedIntroduction() {
  return (
    <div className={styles['disp-flex-intro']}>
      <div className={styles.headAlign}>
        <h1 className={styles.headFeed}>Feed</h1>
        <img src="SVG/feedline (2).svg" alt="line" />
        <div className={styles.content}>
          <p>Find a project to contribute to</p>
          <p>Could not find the project you are searching for?</p>
          <p>Search below and narrow down your results</p>
        </div>
      </div>
      <div className={styles['intro-image']}>
        <img src="SVG/Group 61.svg" alt="group" />
      </div>
    </div>
  );
}
