import React, { useState } from 'react';

import styles from '../../scss/osp.module.scss';

const FormOsp = () => {
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
      <div className={styles.bigBox}>
        <div className={styles.flexingin}>
          <div className={styles.qns}>
            <div style={{ color: 'blue' }}>
              <p>Title</p>
            </div>
            <input
              className={styles.input}
              placeholder="Title of the project"
              style={{ borderBottomColor: 'blue' }}
            />
            <div style={{ color: '#00CACA' }}>
              <p>Description</p>
            </div>
            <input
              className={styles.input}
              placeholder="About your project"
              style={{ borderBottomColor: '#00CACA' }}
            />
            <div style={{ color: '#0BA293' }}>
              <p>Skills</p>
            </div>
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
                placeholder="Enter the skills"
                style={{ borderBottomColor: '#0BA293' }}
                onKeyUp={(e) => onChange(e)}
              />
              <input type="submit" className={styles.addButton} value="+" />
            </form>
            <ul className={styles.skillList}>
              {tags.map((Tag, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={styles.skill}>
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
          <div className={styles.qns}>
            <div style={{ color: 'black' }}>
              <div className={styles.flex}>
                <div>
                  <p>Github</p>
                </div>
                <div>
                  <img src="SVG/git.svg" alt="git" />
                </div>
              </div>
            </div>
            <input
              className={styles.input}
              placeholder="www.github.com/username"
              style={{ borderBottomColor: 'black' }}
            />
            <div style={{ color: '#9F0BDD' }}>
              <div className={styles.flex}>
                <div>
                  <p>Hosting URL</p>
                </div>
                <div>
                  <img src="SVG/url.svg" alt="git" />
                </div>
              </div>
            </div>
            <input
              className={styles.input}
              placeholder="Hosting URL of the project"
              style={{ borderBottomColor: '#9F0BDD' }}
            />
            <p>Upload Your Project Here</p>

            <label htmlFor="file">
              <img
                src="SVG/Group 142.svg"
                alt="upload"
                className={styles.upload}
              />
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
        <div>
          <button type="button" className={styles['enter-button']}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormOsp;
