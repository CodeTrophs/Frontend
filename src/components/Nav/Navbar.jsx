import React from 'react';
import Link from 'next/link';

import styles from '../../scss/navbar.module.scss';
import Burger from './Burger';

const Navbar = () => {
  return (
    <div className={styles.stylenavbar}>
      <Link href='/feed'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <div className={styles.logo}>
            <img className= {styles['header-logo']} src="/logo/codetrophs.png" alt="codetrophs logo" />
          </div>
        </a>
      </Link>
      <Burger />
    </div>
  )
}

export default Navbar
