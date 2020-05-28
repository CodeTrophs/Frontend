import React from 'react';

import styles from '../css/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles['mobile-head']}>
        <h1>Contact Us<hr />  </h1><img src="/logo/monocolored-logo.png" alt="pen" />
      </span>
      <div className={styles['upper-row']}>
        <div className={styles['left-col']}>
          <h1>Contact Us<hr />  </h1>
          <div className={styles['left-badges']}>
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
            <div>
                <img src="/SVG/forum.svg" alt="forum" />
              Forum
            </div>
            <div>
              <img src="/SVG/code-of-conduct.svg" alt="thumb" />
              Code of Conduct
            </div>
          </div>
        </div>
        <div className={styles['right-col']}>
          <img src="/logo/monocolored-logo.png" alt="pen" />
        </div>
      </div>
                    {/* Bottom Row */}
      <div className={styles['bottom-row']}>
        <div>
          <img src="/SVG/pencil.svg" alt="pencil" />
          <p> Edit this page </p>
        </div>
        <div>
          <img src="/SVG/code.svg" alt="</>"/>
          <p> View Source Code </p> 
        </div>
      </div>
    </footer>
  );
}
