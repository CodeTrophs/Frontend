import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import { setAboutInfo } from '../../firestore/profileSettings';
import * as FormValidation from '../../FormValidation';
import styles from '../../scss/settings.module.scss';
import LinearLoader from '../LinearLoader';

import UserContext from '../UserContext';


const Aboutus = ({UserData}) => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [Loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState(null);
  const [aboutError, setAboutError] = useState(null);
  const [skillError, setSkillError] = useState(null);
  const [addSkillButtonDisabled,setAddSkillButtonDisabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const {User} = useContext(UserContext);

  useEffect(()=>{
    async function getBasicInfo() {

      if (UserData !== undefined) {
        if (UserData.skills !== undefined) setTags(UserData.skills);
        if (UserData.title !== undefined) setTitle(UserData.title);
        if (UserData.about !== undefined) setAbout(UserData.about);
      }

    }
    if (User)
    getBasicInfo();
  }, [User]);
  
  useEffect(() => {
    if ((aboutError === null) && (titleError === null)) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  }, [titleError, aboutError]);

  useEffect(() => {
    if (skillError === null)
      setAddSkillButtonDisabled(false);
    else
      setAddSkillButtonDisabled(true);
  },[skillError]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const {uid} = User;
    const formData = {
      title: title.trim(),
      about: about.trim(),
      skills:tags,
      uid
    };
    

    const response = await setAboutInfo(formData);
    if (response.status === 'success')
      toast.success(<div><img src='/icons/save-icon.svg' alt="save" /> About Information Updated Successfully </div>);
    if (response.status === 'error')
      toast.error(<div><img src='/icons/error-icon.svg' alt="error" /> Some Error Occurred! Please try again later. </div>);

    setLoading(false);
  }

  const onChange = (e) => {
    const found = tags.find(el => el.toUpperCase() === e.target.value.toUpperCase());

    if (e.target.value.trim().length < 1 && e.target.value.length > 0)
    {
      setSkillError("This field is required.");
      return;
    }

    if (found !== undefined) {
      setSkillError("This skill is already present.");
    }
    else
      setSkillError(null);
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
          className={`${styles.input} ${titleError !== null ? styles.invalid : ''} `}
          value={title}
          onChange={(e) => { 
            setTitle(e.currentTarget.value); 
            setTitleError(FormValidation.checkLengthLimit((e.currentTarget.value.trim()).length, 50));
          }}
          placeholder="Developer, Student, Programmer"
        />
        <p id='titleError' className='input-field-error'>{titleError}</p>
        <p>About</p>
        <span id={styles['about-info-count']}>{about.length} / 200</span>
        <textarea
          className={`${styles['input-bio']} ${aboutError !== null ? styles.invalid : ''} `}
          value={about}
          rows={4}
          onChange={(e) => {
            setAbout(e.currentTarget.value); 
            setAboutError(FormValidation.checkLengthLimit(e.currentTarget.value.length, 200));
          }}
          placeholder="A short bio of less than 200 characters"
        />
        <p id='aboutInfoError' className='input-field-error'>{aboutError}</p>
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

            className={`${styles.input} ${skillError !== null ? styles.invalid : ''} `}
            id="myInput"
            placeholder="Enter your skills"
            onKeyUp={(e) => onChange(e)}
            autoComplete="off"
          />
          <input type="submit" className={styles.addButton} disabled={addSkillButtonDisabled} value="+" />
        </form>
        <p id='skillError' className='input-field-error'>{skillError}</p>
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
      { !Loading &&
        <button type="button" className={styles.submitButton} onClick={handleFormSubmit} disabled={isDisabled}>Save</button>
      }
      { Loading &&
        <LinearLoader />
      }
    </div>
  );
};

Aboutus.propTypes = {
  UserData: PropTypes.shape({
    title: PropTypes.string,
    about: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Aboutus;
