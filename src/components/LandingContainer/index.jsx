import { string } from 'prop-types';
import React from 'react';

import styles from '../../scss/landingContainer.module.scss';

const LandingContainer = ({ title, imgsrc, line1, line2, line3 }) => (
  <div>
    <div className={styles['landing-container']}>
      <div className={styles['left-col']}>
        <h1>{title}</h1>
        <hr className={styles.hrLine} />
        <p>{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
      </div>
      <div className={styles['right-col']}>
        <img src={imgsrc} alt="organisation-img" />
      </div>
    </div>
  </div>
);

LandingContainer.propTypes = {
  title: string.isRequired,
  imgsrc: string.isRequired,
  line1: string.isRequired,
  line2: string.isRequired,
  line3: string.isRequired
};

export default LandingContainer;
