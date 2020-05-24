import React from 'react';

import styles from '../../css/home.module.css';

export default function AboutUs() {
  return (
    <div>
      <div className={styles['about-us-container']}>
        <div className={styles['about-left-col']}>
          <img alt="about-left-svg" src="/images/about-left-svg.svg" />
        </div>
        <div className={styles['about-right-col']}>
          <h1>
            About <u>OSC</u>
          </h1>

          <p>
            No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure.
          </p>
        </div>
      </div>
    </div>
  );
}
