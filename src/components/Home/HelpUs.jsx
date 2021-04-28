import Link from 'next/link';
import React from 'react';

import styles from '../../scss/home.module.scss';

export default function HelpUs() {

  return (
    <div id="help" className={styles['help-us-container']}>
      {/* <img alt="help-us-left-svg" src="/essential_SVG/donate_hat.svg" /> */}
      <h1 className={styles['help-us-heading']}>Help Us !!</h1>
      <div className={styles['help-us-text']}>
        <p>
          Let&apos;s help the society with free Education. We are on a mission
          of teaching 1 Lakh students for free.
        </p>
        <Link href="/DonateUs" passHref>
          <button className={styles.donateButton} type="submit">
            Donate Us
          </button>
        </Link>
      </div>
    </div>
  );
}
