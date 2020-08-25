import React from 'react';

import styles from '../../scss/home.module.scss';

export default function AboutUs() {
  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#5356A5"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,218.7C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg> */}
      <div className={styles['about-us-container']}>
        <div className={styles['about-left-col']}>
          <img alt="about-left-svg" src="/images/about-left-svg.svg" />
        </div>
        <div className={styles['about-right-col']}>
          <h1>
            About <u> OSC</u>
          </h1>

          <p>
            The idea of open source excites you but not sure where to begin or
            which project to choose? Often feel confused and uncomfortable while
            using GitHub, and can’t think of any available alternative? Well,
            you have arrived at the correct place! &#34; Open Source Code &#34;
            is an open source platform targeted solely for beginners to help
            them contribute to real life projects, from developing new ideas and
            approaches, to exploring the world of open sourcing.
          </p>
        </div>
      </div>
    </div>
  );
}
