import React from 'react';

import styles from '../../scss/osp.module.scss';

export default function HeadOsp() {
  return (
    <div>
      <div className={styles.flexing}>
        <div className={styles['osp-heading']}>
          <h1>ADD AN OPEN SOURCE PROJECT</h1>
          <img src="SVG/underline (1).svg" alt="line" />
          <div className={styles['osp-desc']}>
            <h2>
              Search and contribute to some of the Best Open source projects
            </h2>
          </div>
        </div>
        <div className={styles['side-image']}>
          <img src="SVG/Group 137.svg" alt="gp" />
        </div>
      </div>
    </div>
  );
}
