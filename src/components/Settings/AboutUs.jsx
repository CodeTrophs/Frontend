import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import { setAboutInfo, storedUserData } from '../../firestore/profileSettings';
import styles from '../../scss/settings.module.scss';
import UserContext from '../UserContext';

const Aboutus = () => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
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
    const {uid} = User;
    const formData = await JSON.stringify({
      title,
      about,
      skills:tags,
      uid
    });
    const response = await setAboutInfo(formData);
    if (response.status === 'success')
      toast.success(<div><img src='/icons/save-icon.svg' alt="save" /> About Information Updated Successfully </div>);
    if (response.status === 'error')
      toast.error(<div><img src='/icons/error-icon.svg' alt="error" /> Some Error Occurred! Please try again later. </div>);
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
          onChange={(e)=>setTitle(e.currentTarget.value)}
          placeholder="Developer, Student, Programmer"
        />
        <p>About</p>
        <input
          className={styles['input-bio']}
          value={about}
          onChange={(e) => setAbout(e.currentTarget.value)}
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
      <button type="button" className={styles.submitButton} onClick={handleFormSubmit}>Save</button>

    </div>
  );
};
export default Aboutus;
