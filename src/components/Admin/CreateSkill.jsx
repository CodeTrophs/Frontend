import React, { useState } from 'react';

import style from '../../scss/admin.module.scss';

function CreateSkill() {
  const [skillName, setSkillName] = useState('');

  return (
    <div className={style.adminContainer}>
      <div className={style.container}>
        <div className={style.leftBanner}>
          <h1 className={style.skillHead}><u>Add</u> Skill Category </h1>
          <p>You Can Add a skill here and also questions <br/>related to that skill for test.</p>
          <div className={style.createForm}>
            <h3>Skill Name</h3>
            <input
              type="text"
              name={skillName}
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className={style.field}
            />
            <h3 className={style.spacer}>Add Questions</h3>
            <div className={style.addForm}>
              <h3 className={style.spacer}>Question 1</h3>
              <hr/>
              <p className={style.spacer}>Which one do you like?</p>
              <div>
                  <label className={style.spacer} htmlFor="scales">
                    <input type="checkbox" id="scales" name="scales"
                           checked />{' '}
                    Option 1
                  </label>
              </div>

              <div>
                  <label className={style.spacer} htmlFor="horns">
                    <input type="checkbox" id="horns" name="horns" />{' '}
                    Option 2
                  </label>
              </div>
              <div>
                <label className={style.spacer} htmlFor="horns">
                  <input type="checkbox" id="horns" name="horns" />{' '}
                  Option 3
                </label>
              </div>
              <div>
                <label className={style.spacer} htmlFor="horns">
                  <input type="checkbox" id="horns" name="horns" />{' '}
                  Option 4
                </label>
              </div>
            </div>
            <div className={style.btnContainer}>
              <img src="/icons/Group153.png" alt="icon"/>
              <h3>Add More Questions</h3>
            </div>
            <div className={style.btnContainer}>
              <button className={style.submitBtn} type="submit">Submit</button>
              <button className={style.cancelBtn} type="button">Cancel</button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/SVG/undraw_add_post_64nu.svg"
            alt="me"
            className={style.createBanner}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateSkill;
