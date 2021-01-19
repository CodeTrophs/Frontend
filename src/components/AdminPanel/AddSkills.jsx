import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../scss/AddSkills.module.scss';
import AddSkillsCard from './AddSkillsCard';
// import designImg from './images/AddSkillsPageImg.png';

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
        <span className={styles.leftOfDesignImg}>
          <h1 className={styles.welcomeName}>Welcome John,</h1>
          <h3>The Dashboard for your analytics.</h3>
          <br />
          <br />
          <h3>Skills Currently Onboard</h3>
          <hr className="AddSkillsHr" />
        </span>
        {/* <span className={styles.designImg}>
          <img src={designImg} alt="img" />
        </span> */}
      </div>
      <Link to="/addskillcategory" className={styles.addNewSkill}>
        +
      </Link>
      {SkillsCards.map(function createSkillsCard(SkillsCard) {
        return <AddSkillsCard name={SkillsCard.name} />;
      })}
    </div>
  );
}

export default AddSkills;
