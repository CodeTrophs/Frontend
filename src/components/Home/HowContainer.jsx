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
      {/* <div className={styles['how-bottom-row']}>
        <div className={styles['how-card']}>
          <div
            className={styles['how-card-img-container']}
            style={{ backgroundColor: 'rgb(201, 22, 22)' }}>
            <img
              alt="how-card-sample3-SVG.png"
              src="/images/how-card-sample3-SVG.png"
            />
          </div>
          <p>
             Easy Login with Google/GitHub credentials.
          </p>
        </div>
        <div className={styles['how-card']}>
          <div
            className={styles['how-card-img-container']}
            style={{ backgroundColor: 'rgb(17, 233, 161)' }}>
            <img
              alt="how-card-sample2-SVG.png"
              src="/images/how-card-sample2-SVG.png"
            />
          </div>
          <p>
              Choose your area of knowledge and expertise along with group discussions.
          </p>
        </div>
        <div className={styles['how-card']}>
          <div
            className={styles['how-card-img-container']}
            style={{ backgroundColor: 'rgb(205, 226, 12)' }}>
            <img
              alt="how-card-sample1-SVG.png"
              src="/images/how-card-sample1-SVG.png"
            />
          </div>

          <p>
              Easy code navigate and begin your contributions.
          </p>
        </div>
      </div> */}
    </div>
  );
}
