import React, { useContext } from 'react';

import style from '../../scss/admin.module.scss';
import UserContext from '../UserContext';
import SkillCard from './SkillCard';

function AddSkill() {
  const { User } = useContext(UserContext);
  const skills = [
    {
      id: '1',
      title: 'HTML',
      imageURL: '/images/html.png'
    },
    {
      id: '2',
      title: 'HTML',
      imageURL: '/images/html.png'
    },
    {
      id: '3',
      title: 'HTML',
      imageURL: '/images/html.png'
    },
    {
      id: '4',
      title: 'HTML',
      imageURL: '/images/html.png'
    }
  ];


  return (
    <div className={style.adminContainer}>
      <div className={style.container}>
        <div className={style.leftBanner}>
          <h1 className={style.skillHead}>Welcome {User != null ? User.name : 'User'} </h1>
          <h3>The Dashboard for your analytics</h3>
        </div>
        <div>
          <img
            src="/SVG/undraw_dashboard_nklg (1).svg"
            alt="me"
            className={style.rightBanner}
          />
        </div>
      </div>
      <div className={style.container}>
        <h1 className={style.cardBody}><u>Skills</u> Currently Onboard</h1>
      </div>
      <div className={style.container}>
        {skills.map(skill => <SkillCard key={skill.id} skill={skill} /> )}
      </div>
      <div className={style.container}>
        {skills.map(skill => <SkillCard key={skill.id} skill={skill} /> )}
      </div>
      <div className={style.container}>
        {skills.map(skill => <SkillCard key={skill.id} skill={skill} /> )}
      </div>
      <div className={style.container}>
        {skills.map(skill => <SkillCard key={skill.id} skill={skill} /> )}
      </div>
    </div>
  );
}

export default AddSkill;
