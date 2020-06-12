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
  },[User]);

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

  const formValdiationResponse =  (await FormValidation.checkLimit120('aboutInfoError',about.length) && await FormValidation.checkLimit50('titleError', title.length));
    if(formValdiationResponse === true) {
    const response = await setAboutInfo(formData);
    if (response.status === 'success')
      toast.success(<div><img src='/icons/save-icon.svg' alt="save" /> About Information Updated Successfully </div>);
    if (response.status === 'error')
      toast.error(<div><img src='/icons/error-icon.svg' alt="error" /> Some Error Occurred! Please try again later. </div>);
    }
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
          className={styles.input}
          value={title}
          onChange={(e) => { 
            setTitle(e.currentTarget.value); 
            FormValidation.checkLimit50('titleError', e.currentTarget.value.length);
          }}
          placeholder="Developer, Student, Programmer"
        />
        <p id='titleError' className='input-field-error' />
        <p>About</p>
        <input
          className={styles['input-bio']}
          value={about}
          onChange={(e) => {
            setAbout(e.currentTarget.value); 
            FormValidation.checkLimit120('aboutInfoError', e.currentTarget.value.length);
          }}
          placeholder="A short bio of less than 120 characters"
        />
        <p id='aboutInfoError' className='input-field-error' />
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
        <button type="button" className={styles.submitButton} onClick={handleFormSubmit}>Save</button>
      }
      { Loading &&
        <LinearLoader />
      }
    </div>
  );
};
export default Aboutus;
