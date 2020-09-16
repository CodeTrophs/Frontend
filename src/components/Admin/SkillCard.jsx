import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../scss/admin.module.scss';

// eslint-disable-next-line react/prop-types
const SkillCard = ({ skill: { title } }) => {

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardOverlay}/>
        <div className={styles.cardBody}>
          <h2>{title}</h2>
        </div>
        <div className={styles.cardBody}>
          <button className={styles.cardBtn} type="button">Make Changes</button>
        </div>
      </div>
    </div>
  );
};

SkillCard.prototype = {
  skill: PropTypes.object.isRequired
};

export default SkillCard;
