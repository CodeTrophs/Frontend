import React, { useState } from 'react';

import styles from '../../scss/settings.module.scss';

const Aboutus = () => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  const onChange = (e) => {
    setTag(e.target.value);
  };

  const removeTag = (indexToRemove) => {
    setTags([...tags.filter((element, index) => index !== indexToRemove)]);
  };

  return (
    <div>
      <div className={styles['basic-head']}>
        <h4 style={{ fontWeight: '500' }}>What do you do?</h4>
      </div>
      <div className={styles.qns}>
        <p>Title</p>
        <input
          className={styles.input}
          placeholder="Developer, Student, Programmer"
        />
        <p>About</p>
        <input
          className={styles['input-bio']}
          placeholder="A short bio of less than 120 characters"
        />
        <p>Skills</p>
        <form
          className={styles.skills}
          onSubmit={(e) => {
            setTags([...tags, tag]);
            setTag('');
            e.target.reset();
            e.preventDefault();
          }}>
          <input
            required
            className={styles.input}
            id="myInput"
            placeholder="Enter your skills"
            onKeyUp={(e) => onChange(e)}
          />
          <input type="submit" className={styles.addButton} value="+" />
        </form>
        <ul className={styles.skillList}>
          {tags.map((Tag, index) => (
            <div key={Tag} className={styles.skill}>
              <li>{Tag}</li>
              <div
                role="button"
                tabIndex={0}
                onClick={() => removeTag(index)}
                onKeyDown={() => removeTag(index)}>
                x
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Aboutus;
