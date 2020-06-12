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
  const [websiteError, setWebsiteError] = useState(null);
  const [githubError, setGithubError] = useState(null);
  const [linkedInError, setLinkedInError] = useState(null);
  const [twitterError, setTwitterError] = useState(null);
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
    
    if ((websiteError === null) &&  (githubError === null ) && (linkedInError === null ) && (twitterError === null)) {
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
            setWebsiteError(FormValidation.checkUrl(e.currentTarget.value));
          }}
        />
        <p id='websiteUrlError' className='input-field-error' >{websiteError}</p>
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
            setGithubError(FormValidation.checkUrl(e.currentTarget.value));
          }}
        />
        <p id='githubUrlError' className='input-field-error'>{githubError}</p>
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
            setLinkedInError(FormValidation.checkUrl(e.currentTarget.value));
          }}
        />
        <p id='linkedInUrlError' className='input-field-error'>{linkedInError}</p> 
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
            setTwitterError(FormValidation.checkUrl(e.currentTarget.value));
          }}
        />
        <p id='twitterUrlError' className='input-field-error'>{twitterError}</p>
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
