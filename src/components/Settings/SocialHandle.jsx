import React,{useState,useEffect, useContext} from 'react';

import {toast} from 'react-toastify'

import { setSocialHandles, storedUserData } from '../../firestore/profileSettings';
import * as FormValidation from '../../FormValidation';
import styles from '../../scss/settings.module.scss';
import LinearLoader from '../LinearLoader';
import UserContext from '../UserContext';

const Social = () => {

  const [website, setWebsite] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [twitter, setTwitter] = useState('');
  const [Loading, setLoading] = useState(false);
  const {User}=useContext(UserContext);

  useEffect(() => {
    async function getBasicInfo() {
      const result = await storedUserData(User.uid);
      if (result !== null) {
        if (result.website !== undefined) setWebsite(result.website);
        if (result.github !== undefined) setGithub(result.github); 
        if (result.linkedIn !== undefined) setLinkedIn(result.linkedIn);
        if (result.twitter !== undefined) setTwitter(result.twitter);
      }
    }
    if (User)
    getBasicInfo();
  }, [User]);


  async function handleFormSubmit(e) {
    e.preventDefault();
    const { uid } = User;
    setLoading(true);
    const formData = {
      website,
      github,
      linkedIn,
      twitter,
      uid
    };
    const FormValidationResult = await FormValidation.checkUrl('websiteUrlError', website) &&
                                 await FormValidation.checkUrl('githubUrlError', github) &&
                                 await FormValidation.checkUrl('linkedInUrlError', linkedIn) &&
                                 await FormValidation.checkUrl('twitterUrlError', twitter);
    
    if (FormValidationResult === true) {
      const response = await setSocialHandles(formData);
      if (response.status === 'success')
        toast.success(<div><img src='/icons/save-icon.svg' alt="save" /> Social Handles Updated Successfully </div>);
      if (response.status === 'error')
        toast.error(<div><img src='/icons/error-icon.svg' alt="error" /> Some Error Occurred! Please try again later. </div>);
    }
    setLoading(false);
  }

return(
  <div>
    <div className={styles['basic-head']}>
      <h4 style={{ fontWeight: '500' }}>Where can we find you online?</h4>
    </div>
    <form onSubmit={handleFormSubmit}>
    <div className={styles.qns}>
      <div className={styles['flexing-links']}>
        <div>
          <p>Website</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon feather-globe.svg" alt="globe" />
        </div>
      </div>
        <input
          className={styles.input}
          value={website}
          placeholder="https://your-website.com/"
          onChange={(e) => {
            setWebsite(e.currentTarget.value);
            FormValidation.checkUrl('websiteUrlError', e.currentTarget.value);
          }}
        />
        <p id='websiteUrlError' className='input-field-error' />
      <div className={styles['flexing-links']}>
        <div>
          <p>Github</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-github-alt.svg" alt="git" />
        </div>
      </div>
        <input
          className={styles.input}
          value={github}
          placeholder="https://github.com/"
          onChange={(e) => {
            setGithub(e.currentTarget.value);
            FormValidation.checkUrl('githubUrlError', e.currentTarget.value);
          }}
        />
        <p id='githubUrlError' className='input-field-error' />
      <div className={styles['flexing-links']}>
        <div>
          <p>LinkedIn</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-linkedin.svg" alt="linkedin" />
        </div>
      </div>
        <input
          className={styles.input}
          value={linkedIn}
          placeholder="https://linkedin.com/in/"
          onChange={(e) => {
            setLinkedIn(e.currentTarget.value);
            FormValidation.checkUrl('linkedInUrlError', e.currentTarget.value);
          }}
        />
        <p id='linkedInUrlError' className='input-field-error' />
      <div className={styles['flexing-links']}>
        <div>
          <p>Twitter</p>
        </div>
        <div className={styles['icon-padding']}>
          <img src="SVG/Icon awesome-twitter.svg" alt="tweet" />
        </div>
      </div>
        <input
          className={styles.input}
          value={twitter}
          placeholder="https://twitter.com/"
          onChange={(e) => {
            setTwitter(e.currentTarget.value);
            FormValidation.checkUrl('twitterUrlError', e.currentTarget.value);
          }}
        />
        <p id='twitterUrlError' className='input-field-error' />
      </div>
      {
        !Loading &&
        <button type="submit" className={styles.submitButton}>Save</button>
      }

      {
        Loading &&
        <LinearLoader />
      }
    </form>
  </div>
)
};
export default Social;
