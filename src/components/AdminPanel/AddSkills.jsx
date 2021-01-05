import React from 'react';
import { Link } from 'react-router-dom';

import './AddSkills.css';
import AddSkillsCard from './AddSkillsCard';
import designImg from './images/AddSkillsPageImg.png';

const SkillsCards = [
  {
    name: 'C Programming'
  },
  {
    name: 'C++ Programming'
  }
];

function AddSkills() {
  return (
    <div>
      <div>
        <span className="leftOfDesignImg">
          <h1 className="welcomeName">Welcome John,</h1>
          <h3>The Dashboard for your analytics.</h3>
          <br />
          <br />
          <h3>Skills Currently Onboard</h3>
          <hr />
        </span>
        <span className="designImg">
          <img src={designImg} alt="img" />
        </span>
      </div>
      <Link to="/addskillcategory" className="addNewSkill">
        +
      </Link>
      {SkillsCards.map(function createSkillsCard(SkillsCard) {
        return <AddSkillsCard name={SkillsCard.name} />;
      })}
    </div>
  );
}

export default AddSkills;
