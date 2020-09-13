import React from 'react';

import styles from '../scss/subscribe.module.scss';

export default function Subscribe() {

  return (
    <div>
      {/* ===========================================================================================
                        Subscribe to Mailing List Div
          =========================================================================================== */}

      <div className={styles['subscribe-container']}>
        <img src="SVG/subscribe-top.svg" alt=""/>
        <div className={styles['subscribe-inner']}>
          <img src='SVG/subscribe-top-girl.svg' alt=''/>
          <h2> Stay updated to our Newsletter</h2>
          <div className={styles['subscribe-input']}>
            <input type="email" placeholder="Enter your email"/>
            <button type="button" className={styles['subscribe-button']}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
