import React from 'react';

import styles from '../../css/home.module.css';

export default function WelcomeComponent() {
  return (
    <div className="WelcomeComponent">
      <h5 className={styles['welcome-title']}>
        WELCOME TO OPEN SOURCE CODE PLATFORM
      </h5>
      <p className={styles['landing-text']}>
        Search and Contribute to Some of the Best
        <br />
        <span>OPEN SOURCE PROJECTS</span>
      </p>
    </div>
  );
}
