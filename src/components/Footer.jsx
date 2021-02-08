import Link from 'next/link';
import React from 'react';

import styles from '../scss/footer.module.scss';

export default function Footer() {
  return (
    // ===========================================================================================
    //                   Footer Links
    //     ===========================================================================================
    <footer className={styles.footer}>
      {/* Quick links  */}
      <div className={styles['footer-list']}>
        <ul className={styles.menu}>
          <li>
            <Link href="/about">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Privacy policy</a>
            </Link>
          </li>
        </ul>

        {/* <img src='/essential_SVG/footer_base.svg' alt='codetrophs' /> */}

        {/* Contact us */}
        <ul className={styles.contact}>
          <li>
            <i
              className="fa fa-phone"
              aria-hidden="true"
              style={{ fontSize: '20px', color: 'white' }}
            />
            <a href="tel:+919876543223">+919876543223</a>
          </li>
          <li>
            <i
              className="fa fa-envelope"
              aria-hidden="true"
              style={{ fontSize: '20px', color: 'white' }}
            />
            <a href="mailto:codetrophs@gmail.com"> codetrophs@gmail.com</a>
          </li>
          <li>
            <i
              className="fa fa-map-marker"
              aria-hidden="true"
              style={{ fontSize: '20px', color: 'white' }}
            />
            <span> Palam, Delhi</span>
          </li>
        </ul>
        <div className={styles.socials}>
          {/* <a href="https://discord.gg/HYPt5RX">
            <img src="/SVG/footer-discord.svg" alt="Discord" />
          </a>
          <a href="https://dev.to/_opensourcecode">
            <img src="/SVG/dev_to.svg" alt="Dev.to" />
          </a> */}
          <a href="https://twitter.com/_opensourcecode">
            <i
              className="fa fa-twitter-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white' }}
            />
          </a>

          <a href="https://github.com/OpenSouceCode">
            <i
              className="fa fa-github-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white' }}
            />
          </a>
          <a href="https://www.linkedin.com/company/opensourcecode">
            <i
              className="fa fa-linkedin-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
