import Router from 'next/router'
import React,{useContext, useState} from 'react';

import styles from '../../scss/home.module.scss';
import * as FirebaseAuth from '../FirebaseAuth';
import UserContext from '../UserContext';

export default function WelcomeComponent() {

  const {setUser} = useContext(UserContext);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  function changeUser(name,email,uid) {
    setUser({
      name,
      email,
      uid
    });
  }

  async function handleGoogleSignIn(e) {
    e.preventDefault();
    const newUser = await FirebaseAuth.GoogleSignIn();
    if(newUser.code === undefined) {
      changeUser(newUser.user.displayName,newUser.user.email,newUser.user.uid);
      Router.replace('/feed');
    }
    else
    {
      if (newUser.code !== 'auth/popup-closed-by-user')
      { 
        setError(newUser.message);
        setShowError(true);
        const timer = setTimeout(() => {
          setShowError(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
      Router.push('/');
    }
    return null;
  }

  async function handleGithubSignIn(e) {
    e.preventDefault();
    const newUser = await FirebaseAuth.GithubSignIn();
    if(newUser.code === undefined) {
      changeUser(newUser.user.displayName, newUser.user.email, newUser.user.uid);
      Router.replace('/feed');
    }
    else {
      if (newUser.code !== 'auth/popup-closed-by-user') {
        setError(newUser.message);
        setShowError(true);
        const timer = setTimeout(() => {
          setShowError(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
      Router.push('/');
    }
       return null;
  }

  return (
    <div className={styles['welcome-container']}>
      {
          showError === true &&
          <div className={styles.error}>
            {error}
          </div>  
      }
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
          <button className={styles['github-button']} type="submit" onClick={handleGithubSignIn}>
            <img
              alt="Icon-awesome-github.png"
              src="/images/Iconawesome-github.png"
            />
            <p>Sign in with Github</p>
            <img alt="Right-Arrow.svg" src="/icons/arrow-right.png" />
          </button>

          <button className={styles['google-button']} type="submit" onClick={handleGoogleSignIn}>
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
