import React from 'react';

import styles from '../css/org.module.css';

export default function TopOrganisation() {
  return (
    <div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>
            <h1>Top Organizations<hr /></h1>
          </div>
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Organizations</p>
          </div>
          <div className={styles['search-bar']}>
            <div className={styles['left-col']}>
              <img
                src="/SVG/search-icon.svg"
                alt="search"
                className={styles['search-icon']}
              />
              <input
                type="search"
                name="Search"
                id=""
                className={styles['input-bar']}
                placeholder="Search for Organization"
              />
            </div>
          </div>
        </div>
        <div className={styles['side-image']}>
          <img src="SVG/Group 122.svg" alt="imageside" />
        </div>
      </div>
      <div className={styles['flex-below']}>
        <div className={styles.orgs} style={{ backgroundColor: '#B9007B' }}>
          <img src="SVG/google round.svg" alt="google" />
          <p className={styles['box-head']}>Google</p>
          <button type="button" className={styles.follow} style={{ color: '#B9007B' }}>
            Follow
          </button>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'rgb(0, 119, 255)' }}>
          <img src="SVG/linkedin round.svg" alt="google" />
          <p className={styles['box-head']}>LinkedIn</p>
          <button type="button" className={styles.follow} style={{ color: 'rgb(0, 119, 255)' }}>
            Follow
          </button>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'black' }}>
          <img src="SVG/git round.svg" alt="google" />
          <p className={styles['box-head']}>Github</p>
          <button type="button" className={styles.follow} style={{ color: 'black' }}>
            Follow
          </button>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'orange' }}>
          <img src="SVG/Group 123.svg" alt="google" />
          <p className={styles['box-head']}>GirlScript</p>
          <button type="button" className={styles.follow} style={{ color: 'orange' }}>
            Follow
          </button>
        </div>
      </div>
      <button type="button" className={styles.next}>
        Next
      </button>
    </div>
  );
}
