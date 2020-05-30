import React from 'react';

import styles from '../css/lang.module.css';

export default function TopLanguage() {
  return (
    <div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>
            <h1>Top Languages<hr /></h1>
          </div>
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Languages</p>
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
                placeholder="Search for Languages"
                className={styles['input-bar']}
              />
            </div>
          </div>
        </div>
        <div className={styles['side-image']}>
          <img src="SVG/Group 111.svg" alt="imageside" />
        </div>
      </div>
      <div className={styles['flex-below']}>
        <div className={styles.orgs} style={{ backgroundColor: '#00CACA' }}>

          <p className={styles['box-head']}>C++</p>
          <button type="button" className={styles.follow} style={{ color: '#00cACA' }}>
            Follow
          </button>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'blue' }}>

          <p className={styles['box-head']}>Java</p>
          <button type="button" className={styles.follow} style={{ color: 'blue' }}>
            Follow
          </button>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'rgb(255, 217, 0)' }}>

          <p className={styles['box-head']}>Node</p>
          <button type="button" className={styles.follow} style={{ color: 'rgb(255, 217, 0)' }}>
            Follow
          </button>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'red' }}>

          <p className={styles['box-head']}>React</p>
          <button type="button" className={styles.follow} style={{ color: 'red' }}>
            <p>Follow</p>
          </button>
        </div>
      </div>
      <button type="button" className={styles.next}>
        Next
      </button>
    </div>
  );
}
