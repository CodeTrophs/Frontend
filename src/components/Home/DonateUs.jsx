import React from 'react';
import styles from '../../scss/donate.module.scss';

export default function DonateUs() {
    return(
        <div className={styles['donate-container']}>
      <img
        src="/images/term-decor-left.png"
        alt="Decorative"
        className={styles['donate-decoration']}
      />

      <div className={styles['donate-contents-container']}>
        <div className={styles['donate-heading-container']}>
          <img
            src="/images/term-heading.png"
            className={styles['donate-heading-image']}
            alt="Decorative"
          />
          <h1 className={styles['donate-heading-text']}>Donate Us</h1>
        </div>

        <div className={styles['donate-contents']}>
            <br />
          <p className="mb-l">
            Will be available soon !!
          </p>
        </div>
      </div>

      <img
        src="/images/term-decor-right.png"
        alt="Decorative"
        className={styles['donate-decoration']}
      />
    </div>
    )
}