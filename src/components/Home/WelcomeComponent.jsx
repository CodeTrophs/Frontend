import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../scss/home.module.scss';

export default function WelcomeComponent({ setLoading }) {

  async function handleGithubSignIn(e) {
    setLoading(true);
    e.preventDefault();
    Router.replace(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/auth/github`
    );
    setLoading(false);
    return null;
  }

  return (
    <div className={styles['welcome-container']}>
      <div className={styles['welcome-left']}>
        <h1 className={styles['welcome-title']}>
          Welcome To <br />
          Open Source Code Platform
        </h1>
        <p className={styles['landing-text']}>
          Search and Contribute to Some of the Best
          <br />
          Open Source Projects
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
        <img alt="how-right-SVG.png" src="/images/welcome-right-svg.svg" />
      </div>
    </div>
  );
}

WelcomeComponent.propTypes = {
  setLoading: PropTypes.func.isRequired
};
