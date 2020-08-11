import React from 'react';

import styles from '../scss/footer.module.scss';

export default function Footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f7f7f7"
          fillOpacity="1"
          d="M0,64L48,106.7C96,149,192,235,288,224C384,213,480,107,576,85.3C672,64,768,128,864,144C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <footer className={styles.footer}>
        <div className={styles['footer-content']}>
          <div className={styles.badges}>
            <a href="/">
              <img src="/SVG/twitter.svg" alt="twitter" />
              @OPENSRCDESIGN
            </a>
            <a href="https://github.com/OpenSouceCode">
              <img src="/SVG/Github.svg" alt="github" />
              Github
            </a>
            </div>
          
          
          <div className={styles.badges}>
              <a href="https://opencollective.com/opensourcecode">
              <img src="/SVG/open_collective.svg" alt="github" />
              Open Collective
            </a>
            <a href="https://discord.gg/urV8vGk">
              <img src="/SVG/Discord.svg" alt="discord" />
              Discord
            </a>
          </div>
          <div className={styles['bottom-row']}>
            <a href="https://github.com/OpenSouceCode/Frontend/tree/master/src/components">
              <img src="/SVG/pencil.svg" alt="pencil" />
              Edit this page
            </a>
            <a href="https://github.com/OpenSouceCode/Frontend">
              <img src="/SVG/code.svg" alt="</>" />
              View Source Code
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
