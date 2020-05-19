import React from 'react';

import styles from '../../css/settings.module.css';

const Basicinfo = () => (
  <div>
    <div className={styles['basic-head']}>
      <p>Lets Get Started</p>
    </div>
    <div className={styles.qns}>
      <p>Email</p>
      <input className={styles.input} placeholder="Email" />
      <p>First Name</p>
      <input className={styles.input} placeholder="First Name" />
      <p>Last Name</p>
      <input className={styles.input} placeholder="Last Name" />
      <p>Username</p>
      <input className={styles.input} placeholder="Username" />
    </div>
  </div>
);
export default Basicinfo;
