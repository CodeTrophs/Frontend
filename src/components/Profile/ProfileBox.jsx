import React, { useContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import styles from '../../scss/profile.module.scss';
import * as userService from '../../services/user';
import Spinner from '../Spinner';
import UserContext from '../UserContext';

export default function BoxProfile() {
  const { User } = useContext(UserContext);
  const [Loading, setLoading] = useState(true);
  const [UserData, setUserData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const res = await userService.getProfile();
        if (res.status === 200) {
          setUserData(res.data.data);
          setLoading(false);
        }
      } catch (res) {
        toast.error(
          `${res.status && res.status} : ${res.message && res.message}`
        );
        setLoading(false);
      }
    }
    if (User) getData();
  }, [User]);

  if (Loading) return <Spinner />;

  return (
    <div>
      <div className={styles['usernamebox-profile']}>
        <div className={styles['user-flex']}>
          <div className={styles['top-left-col']}>
            <div className={styles['imgabsolute-border']}>
              <img
                className={styles.imgabsolute}
                src={
                  UserData.profileImage !== null &&
                  UserData.profileImage !== undefined
                    ? UserData.profileImage
                    : '/SVG/user.svg'
                }
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

              <p className={styles['username-skill']}>
                {UserData.title !== null && UserData.title !== undefined
                  ? UserData.title
                  : 'User'}
              </p>
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
            {UserData.socials && UserData.socials.website && (
              <div>
                <a
                  href={UserData.socials.website}
                  target="_blank"
                  title="Website"
                  rel="noopener noreferrer">
                  <img src="SVG/link.png" alt="link" />
                </a>
              </div>
            )}
            {UserData.socials && UserData.socials.github && (
              <div>
                <a
                  href={UserData.socials.github}
                  target="_blank"
                  title="Github"
                  rel="noopener noreferrer">
                  <img src="SVG/Github.svg" alt="github" />
                </a>
              </div>
            )}
            {UserData.socials && UserData.socials.linkedin && (
              <div>
                <a
                  href={UserData.socials.linkedin}
                  target="_blank"
                  title="LinkedIn"
                  rel="noopener noreferrer">
                  <img src="SVG/Linkedin.svg" alt="linkedin" />
                </a>
              </div>
            )}
            {UserData.socials && UserData.socials.twitter && (
              <div>
                <a
                  href={UserData.socials.twitter}
                  target="_blank"
                  title="Twitter"
                  rel="noopener noreferrer">
                  <img src="SVG/twitter.svg" alt="twitter" />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={styles.usercontent}>
          {UserData.about ? <p>{UserData.about}</p> : <p>No about...</p>}
        </div>
        {/* 
        <div className={styles['langsec-centre']}>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Follow</p>
              </div>
              <div className={styles.count}>
                <p>
                  {follows}
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
                <p>{UserData.followingRepositories ? UserData.followingRepositories.length : 0}</p>
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
        </div> */}
      </div>
    </div>
  );
}
