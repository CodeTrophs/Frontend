import React from 'react';

import styles from '../css/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-image']}>
        <img src='/SVG/footer-img.svg' alt='footer-contact' />
      </div>
      <h1>Contact Us<hr /></h1>
      <div className={styles['footer-content']}>
        <div className={styles.badges}>
          <div>
            <img src="/SVG/twitter.svg" alt="twitter" />
            @OPENSRCDESIGN
          </div>
          <div>
            <img src="/SVG/Github.svg" alt="github" />
            Github
          </div>
          <div>
            <img src="/SVG/open_collective.svg" alt="github" />
            Open Collective
          </div>
        </div>
        <div className={styles.badges}>
          <div>
            <img src="/SVG/forum.svg" alt="forum" />
            Forum
          </div>
          <div>
            <img src="/SVG/code-of-conduct.svg" alt="thumb" />
            Code of Conduct
          </div>
        </div>
        <div className={styles['bottom-row']}>
          <div>
            <img src="/SVG/pencil.svg" alt="pencil" />
            Edit this page
          </div>
          <div>
            <img src="/SVG/code.svg" alt="</>" />
            View Source Code
          </div>
        </div>

      </div>
    </footer>
  );
}
