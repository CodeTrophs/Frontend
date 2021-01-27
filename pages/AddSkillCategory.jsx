import React from 'react';

import styles from '../src/scss/AddSkillCategory.module.scss';

function AddSkillCategory() {
  return (
    <div>
      <div>
        <span className={styles.addSkillCatHeading}>Add Skill Category</span>
      </div>
      <hr className={styles.addSkillCatHR} />
      <br />
      <div>You can add a skill here and also questions</div>
      <div>related to that skill for test.</div>
      <br />
      <h3>Skill Name</h3>
      <input type="text" className={styles.SkillNameInput} />
      <h4>Add Questions</h4>
      <div className={styles.AddSkillCatQuestions}>
        <h4>Question 1</h4>
        <hr className={styles.AddSkillCatHR} />
        <br />
        <h4>Which one do you like?</h4>
        <form>
          <label htmlFor="male">
            <input
              type="radio"
              className={styles.Option1}
              name="options"
              value="Option1"
            />{' '}
            Option 1
          </label>
          <br />

          <label htmlFor="female">
            <input
              type="radio"
              className={styles.Option2}
              name="options"
              value="Option2"
            />{' '}
            Option 2
          </label>
          <br />

          <label htmlFor="other">
            <input
              type="radio"
              className={styles.Option3}
              name="options"
              value="Option3"
            />{' '}
            Option 3
          </label>
        </form>
      </div>
      <button className={styles.submit} type="submit">
        Submit
      </button>
      <button className={styles.cancel} type="button">
        Cancel
      </button>
    </div>
  );
}

export default AddSkillCategory;
