import React from 'react';

import styles from '../../css/settings.module.css';

const Basicinfo = () => (
  <div>
    <div className={styles['basic-head']}>
      <h4 style={{ fontWeight: '500' }}>Lets Get Started</h4>
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
