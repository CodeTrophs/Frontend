import React from 'react';

import styles from '../scss/footer.module.scss';

export default function Footer() {
  return (
    // ===========================================================================================
    //                   Footer Links
    //     ===========================================================================================
    <footer className={styles.footer}>
      {/* Quick links  */}
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.desc}>React out to us on Slack, Github or join in the chat room</p>
      <div className={styles.socials}>
      <div className={styles.blocks}>
      <div className={styles.links}>
      <i
          className="fa fa-facebook-square"
          aria-hidden="true"
          style={{ fontSize: '36px', color: 'white'}}/>
          <a href="https://www.facebook.com/codetrophs">Facebook</a>
      </div>
      </div>
      <div className={styles.blocks}>
      <div className={styles.links}>
      <i
              className="fa fa-linkedin-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white'}}/>
              <a href="https://www.linkedin.com/company/codetrophs/">LinkedIn</a>

      </div>

      </div>
      <div className={styles.blocks}>
      <div className={styles.links}>
      <i
              className="fa fa-github-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white'}}/>
              <a href="https://github.com/CodeTrophs">Github</a>
      </div>

      </div>
      <div className={styles.blocks}>
      <div className={styles.links}>
      <i
              className="fa fa-github-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white'}}/>
              <a href="https://discord.gg/urV8vGk">Discord</a>
      </div>

      </div>

      </div>

    </footer>
  );
}
