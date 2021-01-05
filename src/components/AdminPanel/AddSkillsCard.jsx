import PropTypes from 'prop-types';
import React from 'react';
import './AddSkillsCard.css';

function AddSkillsCard({ name }) {
  return (
    <div className="AddSkillsCard">
      <div>{name}</div>
      <button type="button">Make Changes</button>
    </div>
  );
}

AddSkillsCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default AddSkillsCard;
