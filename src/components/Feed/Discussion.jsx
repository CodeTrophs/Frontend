import React from 'react';

import styles from '../../css/discussion.module.css';

const Discussion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2>Discussion</h2>
      </div>
      <div className={styles.middle}>No discussions yet</div>
      <div className={styles.bottom}>
        <textarea name="discussion" id="discussion" />
        <img src="/SVG/attachment.svg" alt="attachment" />

        <img src="/SVG/send.svg" alt=">" />
      </div>
    </div>
  );
};

export default Discussion;
