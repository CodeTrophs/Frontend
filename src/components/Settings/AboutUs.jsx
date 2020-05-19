import React from 'react';

import styles from '../../css/settings.module.css';

const Aboutus = () => (
  <div>
    <div className={styles['basic-head']}>
      <p>What do you do?</p>
    </div>
    <div className={styles.qns}>
      <p>Title</p>
      <input
        className={styles.input}
        placeholder="Developer, Student, Programmer"
      />
      <p>About</p>
      <input
        className={styles['input-bio']}
        placeholder="A short bio of less than 120 characters"
      />
      <p>Skills</p>
      <input
        className={styles.input}
        id="myInput"
        placeholder="Enter your skills"
      />
      <div className={styles.flexing}>
        <div className={styles.skill1}>
          <p>Node</p>
        </div>
        <div className={styles.skill2}>
          <p>React</p>
        </div>
      </div>
    </div>
  </div>
);
export default Aboutus;
