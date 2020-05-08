import React from 'react';
import styles from '../../css/home.module.css';

export default function AboutUs() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles['about-us-curve']}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F7F7F7"
          fillOpacity="1"
          d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,106.7C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <div className={styles['about-us-container']}>
        <div className={styles['about-left-col']}>
          <img alt="about-left-svg" src="/images/about-left-SVG.png" />
        </div>
        <div className={styles['about-right-col']}>
          <h1>ABOUT OSC</h1>
          <br />
          <br />
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f7f7f7"
          fillOpacity="1"
          d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,229.3C672,203,768,149,864,138.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
}
