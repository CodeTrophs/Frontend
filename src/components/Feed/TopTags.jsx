import React from 'react';

import styles from '../../css/feed.module.css';

function FeedTag() {
  return (
    <div className={styles.smallbox}>
      <div className={styles['Language-Head']}>
        <div className={styles['lang-space']}>
          <p>Top Tags</p>
        </div>
      </div>
      <div className={styles.tags}>
        <div className={styles.tag1}>
          <p>lets_code</p>
        </div>
        <div className={styles.tag2}>
          <p>javascript</p>
        </div>
        <div className={styles.tag3}>
          <p>opensourcecode</p>
        </div>
      </div>
    </div>
  );
}
export default FeedTag;
