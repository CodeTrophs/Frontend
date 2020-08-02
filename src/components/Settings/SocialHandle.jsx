import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import { setSocialHandles } from '../../firestore/profileSettings';
import * as FormValidation from '../../FormValidation';
import styles from '../../scss/settings.module.scss';
import LinearLoader from '../LinearLoader';

import UserContext from '../UserContext';

const Social = ({ UserData }) => {
  const [website, setWebsite] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [twitter, setTwitter] = useState('');
  const [Loading, setLoading] = useState(false);
  const [websiteError, setWebsiteError] = useState(null);
  const [githubError, setGithubError] = useState(null);
  const [linkedInError, setLinkedInError] = useState(null);
  const [twitterError, setTwitterError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const { User } = useContext(UserContext);

  useEffect(() => {
    async function getBasicInfo() {
      if (UserData !== undefined) {
        if (UserData.website !== undefined) setWebsite(UserData.website);
        if (UserData.github !== undefined) setGithub(UserData.github);
        if (UserData.linkedIn !== undefined) setLinkedIn(UserData.linkedIn);
        if (UserData.twitter !== undefined) setTwitter(UserData.twitter);
      }
    }
    if (User) getBasicInfo();
  }, [User]);

  useEffect(() => {
    if (
      websiteError === null &&
      githubError === null &&
      linkedInError === null &&
      twitterError === null
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [websiteError, githubError, linkedInError, twitterError]);

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

    const response = await setSocialHandles(formData);
    if (response.status === 'success')
      toast.success(
        <div>
          <img src="/icons/save-icon.svg" alt="save" /> Social Handles Updated
          Successfully{' '}
        </div>
      );
    if (response.status === 'error')
      toast.error(
        <div>
          <img src="/icons/error-icon.svg" alt="error" /> Some Error Occurred!
          Please try again later.{' '}
        </div>
      );
    setLoading(false);
  }

  return (
    <div>
      <div className={styles['basic-head']}>
        <h4 style={{ fontWeight: '500' }}>Where can others find you online?</h4>
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
            className={`${styles.input} ${
              websiteError !== null ? styles.invalid : ''
            } `}
            value={website}
            placeholder="https://your-website.com/"
            onChange={(e) => {
              setWebsite(e.currentTarget.value);
              setWebsiteError(FormValidation.checkUrl(e.currentTarget.value));
            }}
          />
          <p id="websiteUrlError" className="input-field-error">
            {websiteError}
          </p>
          <div className={styles['flexing-links']}>
            <div>
              <p>Github</p>
            </div>
            <div className={styles['icon-padding']}>
              <img src="SVG/Icon awesome-github-alt.svg" alt="git" />
            </div>
          </div>
          <input
            className={`${styles.input} ${
              githubError !== null ? styles.invalid : ''
            } `}
            value={github}
            placeholder="https://github.com/"
            onChange={(e) => {
              setGithub(e.currentTarget.value);
              setGithubError(FormValidation.checkUrl(e.currentTarget.value));
            }}
          />
          <p id="githubUrlError" className="input-field-error">
            {githubError}
          </p>
          <div className={styles['flexing-links']}>
            <div>
              <p>LinkedIn</p>
            </div>
            <div className={styles['icon-padding']}>
              <img src="SVG/Icon awesome-linkedin.svg" alt="linkedin" />
            </div>
          </div>
          <input
            className={`${styles.input} ${
              linkedInError !== null ? styles.invalid : ''
            } `}
            value={linkedIn}
            placeholder="https://linkedin.com/in/"
            onChange={(e) => {
              setLinkedIn(e.currentTarget.value);
              setLinkedInError(FormValidation.checkUrl(e.currentTarget.value));
            }}
          />
          <p id="linkedInUrlError" className="input-field-error">
            {linkedInError}
          </p>
          <div className={styles['flexing-links']}>
            <div>
              <p>Twitter</p>
            </div>
            <div className={styles['icon-padding']}>
              <img src="SVG/Icon awesome-twitter.svg" alt="tweet" />
            </div>
          </div>
          <input
            className={`${styles.input} ${
              twitterError !== null ? styles.invalid : ''
            } `}
            value={twitter}
            placeholder="https://twitter.com/"
            onChange={(e) => {
              setTwitter(e.currentTarget.value);
              setTwitterError(FormValidation.checkUrl(e.currentTarget.value));
            }}
          />
          <p id="twitterUrlError" className="input-field-error">
            {twitterError}
          </p>
        </div>
        {!Loading && (
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isDisabled}>
            Save
          </button>
        )}

        {Loading && <LinearLoader />}
      </form>
    </div>
  );
};

Social.propTypes = {
  UserData: PropTypes.shape({
    website: PropTypes.string,
    github: PropTypes.string,
    linkedIn: PropTypes.string,
    twitter: PropTypes.string
  }).isRequired
};

export default Social;
