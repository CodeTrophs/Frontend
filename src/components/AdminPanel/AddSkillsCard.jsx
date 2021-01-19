import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../scss/AddSkillsCard.module.scss';

function AddSkillsCard({ name }) {
  return (
    <div className={styles.AddSkillsCard}>
      <div>{name}</div>
      <button type="button" className="AddSkillsCardButton">
        Make Changes
      </button>
    </div>
  );
}

AddSkillsCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default AddSkillsCard;
