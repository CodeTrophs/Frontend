import React, { useContext, useEffect, useState } from 'react';

import firebase from '../../firebase';
import styles from '../../scss/profile.module.scss';
import Spinner from '../Spinner';
import UserContext from '../UserContext';

export default function BoxProfile() {
  const db = firebase.firestore();
  const { User } = useContext(UserContext);
  const [Loading, setLoading] = useState(true);
  const [UserData, setUserData] = useState({});
  // const [MissingData, setMissingData] = useState(false);

  useEffect(() => {
    if (User)
      db.collection('users')
        .doc(User.uid)
        .get()
        .then((data) => {
          setUserData(data.data());
          setLoading(false);
        });
  }, [User]);

  if (Loading) return <Spinner />;

  return (
    <div>
      {/* {MissingData ? (
          <div className={styles.alert}>Update your profile...</div>
        ) : null} */}
      <div className={styles['usernamebox-profile']}>
        <div className={styles['user-flex']}>
          <div className={styles['top-left-col']}>
            <div className={styles['imgabsolute-border']}>
              <img
                className={styles.imgabsolute}
                src="SVG/Rectangle 60.svg"
                alt="Profile pic"
              />
            </div>
            <div className={styles.boxcontent}>
              <h2 className={styles['usersname-user']}>
                {UserData.name && UserData.name}
              </h2>
              <hr
                className={styles.hr}
                style={{ width: '20%', border: '0.5px solid #333' }}
              />
              <p style={{ fontWeight: '200' }}>
                {UserData.userName && `@${UserData.userName}`}
              </p>

              <p className={styles['username-skill']}>{UserData.title}</p>
              <div className={styles.langsecSkill}>
                {UserData.skills ? (
                  UserData.skills.map((skill) => {
                    return (
                      <div key={skill} className={styles.skill}>
                        <p>{skill}</p>
                      </div>
                    );
                  })
                ) : (
                  <p style={{ color: 'rgb(138, 138, 138)' }}>No skills...</p>
                )}
              </div>
            </div>
          </div>

          <div className={styles.links}>
            {UserData.github && (
              <div className={styles['top-right-in']}>
                <a href={UserData.github} target="blank">
                  <img src="SVG/social-media.svg" alt="github" />
                </a>
              </div>
            )}
            {UserData.linkedIn && (
              <div className={styles['top-right-in']}>
                <a href={UserData.linkedIn} target="blank">
                  <img src="SVG/Linkedin.svg" alt="linkedin" />
                </a>
              </div>
            )}
            {UserData.twitter && (
              <div className={styles['top-right-in']}>
                <a href={UserData.twitter} target="blank">
                  <img src="SVG/twitter.svg" alt="twitter" />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={styles.usercontent}>
          {UserData.about ? <p>{UserData.about}</p> : <p>No about...</p>}
        </div>

        <div className={styles['langsec-centre']}>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Follow</p>
              </div>
              <div className={styles.count}>
                <p>
                  {UserData.followingOrganisations !== undefined ||
                  UserData.followingLanguages !== undefined
                    ? UserData.followingOrganisations.length +
                      UserData.followingLanguages.length
                    : 0}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Likes</p>
              </div>
              <div className={styles.count}>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Save</p>
              </div>
              <div className={styles.count}>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>OSP</p>
              </div>
              <div className={styles.count}>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
