import React from 'react';

import styles from '../../scss/home.module.scss';

export default function HowContainer() {
  return (
    <div className={styles['how-container']}>
      <div className={styles['how-top-row']}>
        <div className={styles['how-top-left-col']}>
          <h1>
            <u>How</u> OSC Works?
          </h1>
          <p>
            At OSC, the contributors can choose their level of difficulty and
            also their field of expertise to start contributing accordingly, the
            amazing feature which saves your time and effort!
          </p>
        </div>
        <div className={styles['how-top-right-col']}>
          <img alt="how-right-SVG.png" src="/images/how-right-svg.svg" />
        </div>
      </div>
    </div>
  );
}
