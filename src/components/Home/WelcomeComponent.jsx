import Router from 'next/router';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import styles from '../../scss/home.module.scss';
import * as FirebaseAuth from '../FirebaseAuth';
import UserContext from '../UserContext';

export default function WelcomeComponent({ setLoading }) {
  const { setUser } = useContext(UserContext);
  function changeUser(name, email, uid, profileImageUrl) {
    setUser({
      name,
      email,
      uid,
      profileImageUrl
    });
  }

  async function handleGoogleSignIn(e) {
    setLoading(true);
    e.preventDefault();
    const newUser = await FirebaseAuth.GoogleSignIn();
    if (newUser.user === undefined) {
      await FirebaseAuth.logout();
      Router.replace('/');
      toast.error('An error occurred while logging in.');
    } else if (newUser.code === undefined) {
      changeUser(
        newUser.user.displayName,
        newUser.user.email,
        newUser.user.uid,
        newUser.user.photoURL
      );
      // if (newUser.additionalUserInfo.isNewUser) {
      // Router.replace('/toporg');
      // } else {
      Router.replace('/feed');
      // }
    } else if (newUser.code !== 'auth/popup-closed-by-user') {
      if (newUser.code === 'auth/network-request-failed')
        toast.error(
          'Could not connect to the server. Please check your internet connection.'
        );
      else if (newUser.code === 'auth/user-disabled')
        toast.error('This account has been disabled by the administrator.');
      else toast.error('An error occurred while logging in.');
    }
    setLoading(false);
    return null;
  }

  async function handleGithubSignIn(e) {
    setLoading(true);
    e.preventDefault();
    const newUser = await FirebaseAuth.GithubSignIn();
    if (newUser.user === undefined) {
      await FirebaseAuth.logout();
      Router.replace('/');
      toast.error('An error occurred while logging in.');
    } else if (newUser.code === undefined) {
      changeUser(
        newUser.user.displayName,
        newUser.user.email,
        newUser.user.uid,
        newUser.user.photoURL
      );
      if (newUser.additionalUserInfo.isNewUser) {
        Router.replace('/toporg');
      } else {
        Router.replace('/feed');
      }
    } else if (newUser.code !== 'auth/popup-closed-by-user') {
      if (newUser.code === 'auth/network-request-failed')
        toast.error(
          'Could not connect to the server. Please check your internet connection.'
        );
      else if (newUser.code === 'auth/user-disabled')
        toast.error('This account has been disabled by the administrator.');
      else toast.error('An error occurred while logging in.');
    }
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

          <button
            className={styles['google-button']}
            type="submit"
            onClick={handleGoogleSignIn}>
            <img alt="Icon-simple-google" src="/images/google.svg" />
            <p>Sign in with Google</p>
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
