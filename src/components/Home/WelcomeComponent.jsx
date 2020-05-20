import React from 'react';

import styles from '../../css/home.module.css';

export default function WelcomeComponent() {
  return (
    <div className={styles['welcome-container']}>

      <div className={styles['welcome-left']}>
        <h1 className={styles['welcome-title']}>
          Welcome To <br /><u>Open</u> Source Code Platform
        </h1>
        <p className={styles['landing-text']}>
          Search and Contribute to Some of the Best
          <br />
          Open Source Projects
        </p>

        <div className={styles['sign-in-buttons']}>
          
          <button className={styles['github-button']} type="submit">
            <img
              alt="Icon-awesome-github.png"
              src="/images/Iconawesome-github.png"
            />
            <p>Sign in with Github</p>
            <img
              alt="Right-Arrow.svg"
              src="/icons/arrow-right.png"
            />
          </button>

          <button className={styles['google-button']} type="submit">
            <img
              alt="Icon-simple-google"
              src="/images/google.svg"
            />
            <p>Sign in with Google</p>
            <img
              alt="Right-Arrow.svg"
              src="/icons/arrow-right.png"
            />
          </button>
        </div>
      </div>

      <div className={styles['welcome-right']}>
        <img alt="how-right-SVG.png" src="/images/welcome-right-svg.svg" />
      </div>
    </div>
  );
}
