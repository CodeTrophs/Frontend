import React, { useState, useEffect } from 'react';

import * as FormValidation from '../../formValidation';
import styles from '../../scss/osp.module.scss';

const FormOsp = () => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [hostedUrl, setHostedUrl] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [githubError, setGithubError] = useState(null);
  const [hostedUrlError, setHostedUrlError] = useState(null);
  const [skillError, setSkillError] = useState(null);
  const [addSkillButtonDisabled, setAddSkillButtonDisabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false); // Submit Button Disabled

  useEffect(() => {
    if (
      titleError === null &&
      descriptionError === null &&
      githubError === null &&
      hostedUrlError === null &&
      title.length > 0 &&
      description.length > 0 &&
      github.length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [titleError, descriptionError, githubError, hostedUrlError]);

  useEffect(() => {
    if (skillError === null) setAddSkillButtonDisabled(false);
    else setAddSkillButtonDisabled(true);
  }, [skillError]);

  const onChange = (e) => {
    const found = tags.find(
      (el) => el.toUpperCase() === e.target.value.toUpperCase()
    );
    if (e.target.value.trim().length < 1 && e.target.value.length > 0) {
      setSkillError('This field is required.');
      return;
    }
    if (found !== undefined) {
      setSkillError('This skill is already present.');
    } else setSkillError(null);
    setTag(e.target.value);
  };

  const removeTag = (indexToRemove) => {
    setTags([...tags.filter((element, index) => index !== indexToRemove)]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(title, description, github, tags, hostedUrl);
  };

  return (
    <div>
      <div className={styles.bigBox}>
        <div className={styles.flexingin}>
          <div className={styles.qns}>
            <div style={{ color: 'blue' }}>
              <p>
                Title<sup> * </sup>
              </p>
            </div>
            <input
              className={`${styles.input} ${
                titleError !== null ? styles.invalid : ''
              } `}
              placeholder="Title of the project"
              style={{ borderBottomColor: 'blue' }}
              onChange={(e) => {
                setTitle(e.currentTarget.value);
                setTitleError(
                  FormValidation.checkLengthLimit(
                    e.currentTarget.value.trim().length,
                    50,
                    1
                  )
                );
              }}
            />
            <p id="titleError" className="input-field-error">
              {titleError}
            </p>
            <div style={{ color: '#00CACA' }}>
              <p>
                Description<sup> * </sup>
              </p>
            </div>
            <textarea
              className={`${styles.inputArea} ${
                descriptionError !== null ? styles.invalid : ''
              } `}
              placeholder="About your project"
              style={{ borderBottomColor: '#00CACA' }}
              rows="4"
              onChange={(e) => {
                setDescription(e.currentTarget.value);
                setDescriptionError(
                  FormValidation.checkLengthLimit(
                    e.currentTarget.value.trim().length,
                    250,
                    25
                  )
                );
              }}
            />
            <p id="descriptionError" className="input-field-error">
              {descriptionError}
            </p>
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
                className={`${styles.input} ${
                  skillError !== null ? styles.invalid : ''
                } `}
                id="myInput"
                placeholder="Enter the skills"
                style={{ borderBottomColor: '#0BA293' }}
                autoComplete="off"
                onKeyUp={(e) => onChange(e)}
              />
              <input
                type="submit"
                className={styles.addButton}
                disabled={addSkillButtonDisabled}
                value="+"
              />
            </form>
            <p id="skillError" className="input-field-error">
              {skillError}
            </p>
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
                  <p>
                    Github<sup> * </sup>
                  </p>
                </div>
                <div>
                  <img src="SVG/git.svg" alt="git" />
                </div>
              </div>
            </div>
            <input
              className={`${styles.input} ${
                githubError !== null ? styles.invalid : ''
              } `}
              placeholder="www.github.com/username"
              style={{ borderBottomColor: 'black' }}
              onChange={(e) => {
                if (e.currentTarget.value.trim().length === 0) {
                  setGithubError('This field is required.');
                  return;
                }
                setGithub(e.currentTarget.value);
                setGithubError(FormValidation.checkUrl(e.currentTarget.value));
              }}
            />
            <p id="githubError" className="input-field-error">
              {githubError}
            </p>
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
              className={`${styles.input} ${
                hostedUrlError !== null ? styles.invalid : ''
              } `}
              placeholder="Hosting URL of the project"
              style={{ borderBottomColor: '#9F0BDD' }}
              onChange={(e) => {
                setHostedUrl(e.currentTarget.value);
                setHostedUrlError(
                  FormValidation.checkUrl(e.currentTarget.value)
                );
              }}
            />
            <p id="hostedUrlError" className="input-field-error">
              {hostedUrlError}
            </p>
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
          <button
            type="button"
            onClick={handleFormSubmit}
            disabled={isDisabled}
            className={styles['enter-button']}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormOsp;
