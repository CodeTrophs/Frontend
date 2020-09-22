import React from 'react';

import styles from '../../scss/home.module.scss';

export default function HelpUs() {
  const donateClick = (e) => {
    e.preventDefault();
    window.open('https://paytm.me/q5ZP-KI', '_blank');
    return null;
  };
  return (
    <div className={styles['help-us-outer']}>
      <div className={styles['help-us-container']}>
        <div className={styles['help-us-left-col']}>
          <img alt="help-us-left-svg" src="/images/helpUs-left-svg.svg" />
        </div>
        <div className={styles['help-us-right-col']}>
          <h1>
            Help <u> Us</u>
          </h1>

          <p>
            Let&apos;s help the society with free Education. We are on a mission
            of teaching 1 Lakh students for free.
          </p>
          <button
            className={styles.donateButton}
            onClick={donateClick}
            type="submit">
            Donate Us
          </button>
        </div>
      </div>
    </div>
  );
}
