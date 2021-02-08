import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import config from '../../config';
import styles from '../../scss/home.module.scss';

export default function WelcomeComponent({ setLoading }) {
  async function handleGithubSignIn(e) {
    setLoading(true);
    e.preventDefault();
    Router.replace(
      `${config.BACKEND_URL}/v1/auth/github`
    );
    setLoading(false);
    return null;
  }

  return (
    <div id="welcome" className={styles['welcome-container']}>
      <div className={styles['welcome-left']}>
        <div className={styles['welcome-title-container']}> 
          <img
            src="/images/home/welcome-rectangle.svg"
            alt="vertical rectangle"
            className={styles['welcome-title-bar']}
          />
          <h1 className={styles['welcome-title']}>
            Explore the World of
            <br />
            Open Sourcing
          </h1>
        </div>

        <p className={styles['landing-text']}> &quot;CodeTrophs&quot; is an open source platform targeted solely for
          beginners to help them contribute to real life projects.{' '}
        </p>

        <div className={styles['sign-in-buttons']}>
          <button
            className={styles['github-button']}
            type="submit"
            onClick={handleGithubSignIn}>
            <img
              alt="Icon-awesome-github.png"
              src="/images/Iconawesome-github.png"
            />
            <p>Sign in with Github</p>
            <img alt="Right-Arrow.svg" src="/icons/arrow-right.png" />
          </button>
        </div>
      </div>

      <div className={styles['welcome-right']}>
        <img alt="welcome page svg" src="/images/home/welcome.svg" />
      </div>
    </div>
  );
}

WelcomeComponent.propTypes = {
  setLoading: PropTypes.func.isRequired
};
