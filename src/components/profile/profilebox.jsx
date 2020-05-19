import React from 'react';

import styles from '../../css/profile.module.css';

export default function BoxProfile() {
  return (
    <div>
      <div className={styles['usernamebox-profile']}>
        <div className={styles['user-flex']}>
          <div className={styles['top-left-col']}>
            <img
              className={styles.imgabsolute}
              src="SVG/Rectangle 60.svg"
              alt="Profile pic"
            />

            <div className={styles.boxcontent}>
              <p className={styles['usersname-user']}>Arya Soni</p>
              <hr
                className={styles.hr}
                style={{ width: '20%', color: '#707070' }}
              />
              <p style={{ fontWeight: '200' }}>@aryasoni98</p>

              <p className={styles['username-skill']}>Developer</p>
            </div>
          </div>

          <div className={styles.links}>
            <div>
              <img src="SVG/social-media.svg" alt="github" />
            </div>
            <div className={styles['top-right-in']}>
              <img src="SVG/Linkedin.svg" alt="linkedin" />
            </div>
            <div className={styles['top-right-in']}>
              <img src="SVG/brands-and-logotypes.svg" alt="linkedin" />
            </div>
          </div>
        </div>

        <div className={styles.usercontent}>
          <p>
            Something about the user. User will give it later.Dont be scared of
            Something about the user. User will give it later.Dont be scared of
            Something about the user. User will give it later.Dont be scared of
            Something about the user. User will give it later.Dont be scared of
            Something about the user. User will give it later.Dont be scared of
            Something about the user. User will give it later.Dont be scared of
            Something about the user. User will give it later.Dont be scared of
            Something about the user. User will give it later.Dont be scared of
          </p>
        </div>

        <div className={styles.langsec}>
          <div>
            <p className={styles.userskills}>Skills</p>
          </div>
          <div className={styles.langButtonJS}>
            <p>Javascript</p>
          </div>
          <div className={styles.langButtonCSS}>
            <p>CSS</p>
          </div>
        </div>

        <div className={styles['langsec-centre']}>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles['smallboxwriting-follow']}>
                <p>Follow</p>
              </div>
              <div className={styles.count}>
                <p>1</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Likes</p>
              </div>
              <div className={styles.count}>
                <p>5</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Save</p>
              </div>
              <div className={styles.count}>
                <p>5</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles['smallboxwriting-osp']}>
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
