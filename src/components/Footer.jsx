import React from 'react';

import styles from '../css/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['left-col']}>
        <h2>Contact Us</h2>
        <div className={styles['left-badges']}>
          <div>
            <img src="/SVG/code-of-conduct.svg" alt="thumb" />
            Code of Conduct
          </div>
          <div>
            <img src="/SVG/forum.svg" alt="forum" />
            Forum
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontWeight: '200',
            cursor: 'pointer'
          }}>
          <img src="/SVG/pencil.svg" alt="pencil" />
          <p>Edit this page</p>
        </div>
      </div>
      <div className={styles['center-col']}>
        <div className={styles.stripes} style={{ backgroundColor: '#00FFF2' }}>
          <img src="/SVG/code.svg" alt="</>" />
        </div>
        <div className={styles.stripes} style={{ backgroundColor: '#797979' }}>
          <img src="/SVG/Github.svg" alt="github" />
        </div>
        <div className={styles.stripes} style={{ backgroundColor: '#5B92AA' }}>
          <img src="/SVG/twitter.svg" alt="twitter" />
        </div>
      </div>
      <div className={styles['right-col']}>
        <img src="/logo/monocolored-logo.png" alt="pen" />
      </div>
    </footer>
  );
}
