import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as FormValidation from '../../formValidation';
import styles from '../../scss/settings.module.scss';
import { updateProfile } from '../../services/user';
import LinearLoader from '../LinearLoader';

const AboutYou = ({ UserData }) => {
  const [fullName, setFullName] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [Loading, setLoading] = useState(false);
  const [fullNameError, setFullNameError] = useState(null);
  const [titleError, setTitleError] = useState(null);
  const [aboutError, setAboutError] = useState(null);
  const [skillError, setSkillError] = useState(null);
  const [addSkillButtonDisabled, setAddSkillButtonDisabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (UserData !== null) {
      setFullName(UserData.name);
      UserData.title ? setTitle(UserData.title) : setTitle('');
      UserData.about ? setAbout(UserData.about) : setAbout('');
      UserData.skills ? setTags(UserData.skills) : setTags([]);
    }
  }, [UserData]);

  useEffect(() => {
    if (aboutError === null && titleError === null && fullNameError === null) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [titleError, aboutError, fullNameError]);

  useEffect(() => {
    if (skillError === null) setAddSkillButtonDisabled(false);
    else setAddSkillButtonDisabled(true);
  }, [skillError]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: fullName.trim(),
      title: title.trim(),
      about: about.trim(),
      skills: tags
    };
    try {
      const response = await updateProfile(data);
      if (response.status === 200)
        toast.success(
          <div>
            <img src="/icons/save-icon.svg" alt="save" /> About Information
            Updated Successfully{' '}
          </div>
        );
      setLoading(false);
    } catch (response) {
      if (response.status === 400) {
        response.data && response.data.name
          ? setFullNameError(response.data.name)
          : setFullNameError(null);
        response.data && response.data.title
          ? setTitleError(response.data.title)
          : setTitleError(null);
        response.data && response.data.about
          ? setAboutError(response.data.about)
          : setAboutError(null);
        response.data && response.data.skills
          ? setSkillError(response.data.skills)
          : setSkillError(null);
        toast.error(
          <div>
            <img src="/icons/error-icon.svg" alt="error" />{' '}
            {response.message && response.message}
          </div>
        );
      }

      setLoading(false);
    }
  }

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

  return (
    <div>
      <div className={styles['basic-head']}>
        <h4 style={{ fontWeight: '500' }}>Let&apos;s get Started !</h4>
      </div>
      <div className={styles.qns}>
        <p>
          {' '}
          Full Name <sup>*</sup>
        </p>
        <input
          className={`${styles.input} ${
            fullNameError !== null ? styles.invalid : ''
          } `}
          value={fullName}
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setFullName(e.currentTarget.value);
            setFullNameError(
              FormValidation.checkLengthLimit(
                e.currentTarget.value.trim().length,
                50,
                1
              )
            );
          }}
        />
        <p id="fullNameError" className="input-field-error">
          {fullNameError}
        </p>
        <p>Title</p>
        <input
          className={`${styles.input} ${
            titleError !== null ? styles.invalid : ''
          } `}
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
            setTitleError(
              FormValidation.checkLengthLimit(
                e.currentTarget.value.trim().length,
                50
              )
            );
          }}
          placeholder="Developer, Student, Programmer"
        />
        <p id="titleError" className="input-field-error">
          {titleError}
        </p>
        <p>About</p>
        <span id={styles['about-info-count']}>{about.length} / 200</span>
        <textarea
          className={`${styles['input-bio']} ${
            aboutError !== null ? styles.invalid : ''
          } `}
          value={about}
          rows={4}
          onChange={(e) => {
            setAbout(e.currentTarget.value);
            setAboutError(
              FormValidation.checkLengthLimit(e.currentTarget.value.length, 200)
            );
          }}
          placeholder="A short bio of less than 200 characters"
        />
        <p id="aboutInfoError" className="input-field-error">
          {aboutError}
        </p>
        <p>Skills</p>
        <form
          className={styles.skills}
          onSubmit={(e) => {
            e.preventDefault();
            setTags([...tags, tag]);
            setTag('');
            e.target.reset();
          }}>
          <input
            required
            className={`${styles.input} ${
              skillError !== null ? styles.invalid : ''
            } `}
            id="myInput"
            placeholder="Enter your skills"
            onKeyUp={(e) => onChange(e)}
            autoComplete="off"
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
        <div className={styles.skillList}>
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
        </div>
      </div>
      <br />
      {!Loading && (
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleFormSubmit}
          disabled={isDisabled}>
          Save
        </button>
      )}
      {Loading && <LinearLoader />}
    </div>
  );
};

AboutYou.propTypes = {
  UserData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    about: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default AboutYou;
