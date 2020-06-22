import React from 'react';

import styles from '../../scss/home.module.scss';

export default function HowContainer() {
  return (
    <div className={styles['how-container']}>
      <div className={styles['how-top-row']}>
        <div className={styles['how-top-left-col']}>
          <h1><u>How</u> OSC Works?</h1>
          <p>
            Some random text about how we function. What all things we do and
            how It will benefit out. Below are a few processes on how we
            function.Some random text about how we function. What all things we
            do and how It will benefit out. Below are a few processes on how we
            function.Some random text about how we function.
          </p>
        </div>
        <div className={styles['how-top-right-col']}>
          <img alt="how-right-SVG.png" src="/images/how-right-svg.svg" />
        </div>
      </div>
      <div className={styles['how-bottom-row']}>
        <div className={styles['how-card']}>
          <div className={styles['how-card-img-container']} style={{ backgroundColor: "rgb(201, 22, 22)" }}>  
            <img
              alt="how-card-sample3-SVG.png"
              src="/images/how-card-sample3-SVG.png"
            />
          </div>
          <p>
            We can do this and that In this way so as contain our knowledge and
            have a goodnights sleep
          </p>
        </div>
        <div className={styles['how-card']}>
          <div className={styles['how-card-img-container']} style={{ backgroundColor: "rgb(17, 233, 161)" }}>  
            <img
              alt="how-card-sample2-SVG.png"
              src="/images/how-card-sample2-SVG.png"
            />
          </div>
          <p>
            We can do this and that In this way so as contain our knowledge and
            have a goodnights sleep
          </p>
        </div>
        <div className={styles['how-card']}>
          <div className={styles['how-card-img-container']} style={{ backgroundColor: "rgb(205, 226, 12)" }}>
            <img
              alt="how-card-sample1-SVG.png"
              src="/images/how-card-sample1-SVG.png"
            />
          </div>
          
          <p>
            We can do this and that In this way so as contain our knowledge and
            have a goodnights sleep
          </p>
        </div>
      </div>
    </div>
  );
}
