import Link from 'next/link';
import React from 'react';

import styles from '../css/card.module.scss';

export default function Card() {
  return (
    <div>
      <div className={styles['big-box']}>
        <div className={styles.flex}>
          <div>
            <img src="SVG/Rectangle 217.svg" alt="project" />
            <div className={styles.heart}>
              <img src="SVG/heart (1).svg" alt="like" />
              <p>213</p>
            </div>
          </div>
          <div className={styles.middle}>
            <Link href="/project/[pid]" as="/project/pid">
              <div className={styles.heading}>
                <p>Open Source Code</p>
              </div>
            </Link>
            <div>
              <div className={styles.date}>
                <p>By Organisation | 08 May 2020</p>
              </div>
              <p>
                There should be some content her. So I am filling this with
                random content inorder to fill this space. Feel free to add
                on.We can add more and more content here so that we can see what
                this is gonna look like on the real website page
              </p>
            </div>
            <div className={styles.flex}>
              <div className={styles.langButton}>
                <p>Javascript</p>
              </div>
              <div className={styles.langButton}>
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className={styles.save}>
            <div className={styles.flex}>
              <div className={styles['smallbox-below']}>
                <div className={styles.flex}>
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
                  <div className={styles.flex}>
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
            <div className={styles['save-syntax']}>
              <p>Save</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
