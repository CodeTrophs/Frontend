import React from 'react';

import styles from '../scss/footer.module.scss';

export default function Footer() {
  return (
    <div>
      {/* ===========================================================================================
                        Footer Links
          =========================================================================================== */}

      <footer className={styles.footer}>
        <h1 className={styles.heading}>
          {' '}
          Contact Us
          <hr/>
        </h1>
        <ul className={styles.badges}>
          {/* Dev.to */}
          <li>
            <a href="https://dev.to/_opensourcecode">
              <img src="/SVG/dev_to.svg" alt="Dev.to"/>
              Dev.to
            </a>
          </li>
          {/* Discord */}
          <li>
            <a href="https://discord.gg/HYPt5RX">
              <img src="/SVG/footer-discord.svg" alt="Discord"/>
              Discord
            </a>
          </li>
          {/* Twitter */}
          <li>
            <a href="https://twitter.com/_opensourcecode">
              <img src="/SVG/footer-twitter.svg" alt="Twitter"/>
              Twitter
            </a>
          </li>
          {/* Github */}
          <li>
            <a href="https://github.com/OpenSouceCode">
              <img src="/SVG/footer-github.svg" alt="Github"/>
              Github
            </a>
          </li>
          {/* LinkedIn */}
          <li>
            <a href="https://www.linkedin.com/company/opensourcecode">
              <img src="/SVG/footer-linkedin.svg" alt="LinkedIn"/>
              LinkedIn
            </a>
          </li>
          {/* Slack */}
          <li>
            <a href="https://join.slack.com/t/opensourcecode/shared_invite/zt-f0frpe9g-8fGLNGPA6HUQR~XuCoAJmg">
              <img src="/SVG/footer-slack.svg" alt="Slack"/>
              Slack
            </a>
          </li>

          <li>
            <a href="https://github.com/OpenSouceCode/Frontend/tree/master/src/components">
              <img src="/SVG/pencil.svg" alt="pencil"/>
              Edit this page
            </a>
          </li>
          <li>
            <a href="https://github.com/OpenSouceCode/Frontend">
              <img src="/SVG/code.svg" alt="</>"/>
              View Source Code
            </a>
          </li>
        </ul>
        <div className={styles['partner-logo']}>
          <img src="SVG/footer-partner-logo.svg" alt="Powered by InCampus"/>
        </div>
      </footer>
    </div>
  );
}
