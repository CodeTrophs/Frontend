import Link from 'next/link';
import React from 'react';

import styles from '../../scss/RightNavbar.module.scss';

const RightNavbar = ({ open }) => {

  return (
    <ul className={`${styles.ul_div} ${open?styles.ul_open: styles.ul_close}`}>
    <li className={styles.li_ul}><Link href="/about">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
       <a className={styles.a_li}>About Us</a>
            </Link></li>
      <li className={styles.li_ul}><Link href="/terms-of-service">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.a_li}>Terms of Service</a>
    </Link></li>
      <li className={styles.li_ul}><Link href="/privacy-policy">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
       <a className={styles.a_li}>Privacy Policy</a>
    </Link></li>
    </ul>

  )

}


export default RightNavbar
