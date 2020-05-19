import React from 'react';

import styles from '../../css/home.module.css';

export default function HowContainer() {
  return (
    <div className={styles['how-container']}>
      <div className={styles['how-top-row']}>
        <div className={styles['how-top-left-col']}>
          <h1>HOW OSC WORKS?</h1>
          <p>
            Some random text about how we function. What all things we do and
            how It will benefit ou.t. Below are a few processes on how we
            function.Some random text about how we function. What all things we
            do and how It will benefit ou.t. Below are a few processes on how we
            function.Some random text about how we function.
          </p>
        </div>
        <div className={styles['how-top-right-col']}>
          <img alt="how-right-SVG.png" src="/images/how-right-SVG.png" />
        </div>
      </div>
      <div className={styles['how-bottom-row']}>
        <div className={styles['how-card']}>
          <img
            alt="how-card-sample3-SVG.png"
            src="/images/how-card-sample3-SVG.png"
          />
          <h3>Work #1</h3>
          <p>
            We can do this and that In this way so as contain our knowledge and
            have a goodnights sleep
          </p>
        </div>
        <div className={styles['how-card']}>
          <img
            alt="how-card-sample2-SVG.png"
            src="/images/how-card-sample2-SVG.png"
          />
          <h3>Work #2</h3>
          <p>
            We can do this and that In this way so as contain our knowledge and
            have a goodnights sleep
          </p>
        </div>
        <div className={styles['how-card']}>
          <img
            alt="how-card-sample1-SVG.png"
            src="/images/how-card-sample1-SVG.png"
          />
          <h3>Work #3</h3>
          <p>
            We can do this and that In this way so as contain our knowledge and
            have a goodnights sleep
          </p>
        </div>
      </div>
    </div>
  );
}
