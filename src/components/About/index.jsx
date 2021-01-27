import React from 'react';

import styles from '../../scss/about.module.scss';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <div className={styles['about-contents-container']}>
        <div className={styles['about-heading-container']}>
          <img
            src="/images/about-elipse.png"
            className={styles['about-heading-image']}
            alt="Decorative"
          />
          <h1 className={styles['about-heading-text']}>About Us</h1>
        </div>

        <div className={styles['about-contents']}>
          <p className="mb-l">
            CodeTrophs is an open-source platform targeted for beginners to help
            them contribute to real-life projects, from developing new ideas and
            approaches, to exploring the world of open sourcing. It provides an
            interactive user interface for beginners and aims at bridging the
            gap between students and research professors worldwide. Moreover,
            the platform plans on acting as a helping hand to individuals who
            are preparing for the coding interviews, providing them with a real
            live interview experience.
          </p>

          <p className="mb-l">
            A distinguished point for the users is the application distinction
            feature that we provide to our users. This entails the bifurcation
            of projects based on the categorical arrangement in the language in
            which the code is written and its implementation for example, as
            kotlin links to android as python links to machine learning. The
            user will be able to save the repository that he/she wishes to
            explore more in their dashboard. The UI provides the user with the
            number of PR’s and issues in the repository that he/she is viewing.
          </p>

          <p className="mb-l">
            We are also expanding into the field of AI. CodeTrophs has a project
            that provides an interactive user interface for beginners and aims
            at bridging the gap between students and research professors
            worldwide. We are aiming at making a feature on the platform that
            allows the student looking to intern under a professor to select a
            professor by assisting them with the professor&apos;s field of study.
            Further, we are opening a whole new avenue for the professors who
            are bombarded with emails from students willing to intern under
            him/her. In-short we are bridging the gap between a professor and a
            student.
          </p>

          <p className="mb-l">
            Selection in big companies requires an aspirant to be proficient in
            coding as well as fluent in his words. The latter sometimes becomes
            a major anchor for various students with the ability to achieve high
            otherwise. This is a problem that our current interface looks at
            resolving. We are building an interface that helps users with a
            situation by the use of an AR that asks questions on the basis of a
            code which the aspirant has written, asked from a diverse pack of
            frequently asked coding questions. Then the AR asks the aspirant
            questions related to his code and some staple questions. At the end
            of this experience, the user receives his interview profile showing
            him his flaws in answering questions, his fluency, and his ability
            to handle the situation verbally. This can be done on various levels
            and be stored for future scrutiny by the user. We can also provide a
            growth curve that helps the aspirant to judge his progress.
          </p>

          <p>
            We at CodeTrophs have always promoted the originality and
            authenticity of one&apos;s idea and even encourage our members to come
            with an out of the box solution to any problem there is. Welcome to
            CodeTrophs, where ideas meet reality.
          </p>
        </div>
      </div>
      <img
        src="/images/about-decor.png"
        alt="Decorative"
        className={styles['about-decoration']}
      />
    </div>
  );
};

export default About;
