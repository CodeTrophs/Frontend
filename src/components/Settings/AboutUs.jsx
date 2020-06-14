import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import { setAboutInfo, storedUserData } from '../../firestore/profileSettings';
import * as FormValidation from '../../FormValidation';
import styles from '../../scss/settings.module.scss';
import LinearLoader from '../LinearLoader';
import UserContext from '../UserContext';

const Aboutus = () => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [Loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState(null);
  const [aboutError, setAboutError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const {User} = useContext(UserContext);

  useEffect(()=>{
    async function getBasicInfo() {
      const result = await storedUserData(User.uid);
      if (result !== null) {
        if (result.skills !== undefined) setTags(result.skills);
        if (result.title !== undefined) setTitle(result.title);
        if (result.about !== undefined) setAbout(result.about);
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


  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const {uid} = User;
    const formData = {
      title,
      about,
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
            setTitleError(FormValidation.checkLengthLimit(e.currentTarget.value.length, 50));
          }}
          placeholder="Developer, Student, Programmer"
        />
        <p id='titleError' className='input-field-error'>{titleError}</p>
        <p>About</p>
        <span id={styles['about-info-count']}>{about.length} / 200</span>
        <input
          className={`${styles['input-bio']} ${aboutError !== null ? styles.invalid : ''} `}
          value={about}
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
export default Aboutus;
