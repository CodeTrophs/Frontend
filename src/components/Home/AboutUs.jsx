import React from 'react';

import styles from '../../scss/home.module.scss';

export default function AboutUs() {
  return (
    <div id="about" className={styles['about-us-container']}>
      <div className={styles['about-us-heading-container']}>
        <div className={styles['about-us-heading-image']}>
          <img src="/images/home/about-heading.svg" alt="Decorative" />
        </div>
        <h1 className={styles['about-us-heading-text']}>About CodeTrophs</h1>
      </div>
      <div className={styles['about-us-text']}>
        <p>
          Does the idea of open source excite you but not sure where to begin or
          which project to choose? Often feel confused and uncomfortable while
          using GitHub, and can’t think of any available alternative? Well, you
          have arrived at the correct place &#34; CodeTrophs &#34; is an open
          source platform targeted solely for beginners to help them contribute
          to real life projects, from developing new ideas and approaches, to
          exploring the world of open sourcing. &#34;
        </p>
        <img className={styles["about-us-text-vertical"]} src="/images/home/about-vertical.svg" alt="about_vertical" />
      </div>
    </div>
  );
}
