import React from 'react';

import styles from '../../scss/profile.module.scss';

export default function ProjectProfile() {
  return (
    <div>
      <div className={styles.usernamebox}>
        <div className={styles['card-top-row']}>
          <div className={styles['card-left-col']}>
            <div className={styles['imgabsolute-lower']}>
              <img src="SVG/Rectangle 217.svg" alt="project" />
            </div>
            <div className={styles['imgabsolute-lowerheart']}>
              <img src="SVG/heart (1).svg" alt="like" />
              <p>213</p>
            </div>
          </div>

          <div className={styles.usersname}>
            <p>Open Source Code</p>
          </div>
          <div>
            <div className={styles['card-langsec']}>
              <div className={styles['smallbox-below']}>
                <div className={styles.langsec}>
                  <div>
                    <img
                      src="SVG/Icon awesome-exclamation-circle.svg"
                      alt="issue"
                    />
                  </div>
                  <div>
                    <p>Issues:13</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['smallbox-below']}>
                  <div className={styles.langsec}>
                    <div>
                      <img src="SVG/pr.svg" alt="pr" />
                    </div>
                    <div>
                      <p>PR:1233</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['padding-below']}>
          <div className={styles.date}>
            <p>By Organisation | 08 May 2020</p>
            <p className={styles.contentuser}>
              There should be some content her. So I am filling this with random
              content inorder to fill this space. Feel free to add on.We can add
              more and more content here so that we can see what this is gonna
              look like on the real website page
            </p>
          </div>
          <div className={styles.langsec}>
            <div className={styles.langButtonJSnew}>
              <p>Javascript</p>
            </div>
            <div className={styles['langButtonCSS-below']}>
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className={styles['savebutton-align']}>
          <div className={styles.savebutton}>
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}
