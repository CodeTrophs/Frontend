import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/landingContainer.module.css';

const LandingContainer = ({
  title, imgsrc, line1, line2, line3,
}) => (
  <div>
    <div className={styles['landing-container']}>
      <div className={styles['left-col']}>
        <h1>{title}</h1>
        <hr
          style={{
            width: '10%',
            border: 'none',
            backgroundColor: '#333',
            height: '8px',
            marginLeft: '10px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        />
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
  title: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string.isRequired,
  line3: PropTypes.string.isRequired,
};

export default LandingContainer;
