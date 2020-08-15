import React from 'react';


import styles from '../../../scss/maincomponent.module.scss';

const maincomponent = () => (
    <div className={styles['grid-container']}>
        {/* <div className={styles.sidedrawer}>
            <div className={styles.tabs}>
                    <p>ISSUES</p>
                    <p>PULL REQUEST</p>
                    <p>DISCUSSION FORUM</p>
            </div>
        </div> */}
        
    <div className={styles.discussion}>
        <div className={styles.discussion_title}>
            <h1>Discussion Forum</h1>
            <p>Get help and discuss with the community</p>
        </div>
    </div>
        
    <div className={styles.description}>
       <div className={styles.box}>
            <h2>Description</h2>
            <p>Welcome to the discussion forums! Ask questions, debate ideas, and find mates who share your goal</p>
        </div>
    </div>
    <div className={styles.forumguide}>
        <h2>Forum Guidelines           </h2>
    </div>
    <div className={styles.adsection}>
        <div className={styles.box}>
            <h1>AD SECTION</h1>
        </div>
    </div>
    <div className={styles.sortby}>
        <div className={styles.sort_title}>
            <p><strong>Sort by: </strong>Latest </p>
            <div className={styles.button}>New Thread</div>
        </div>
    </div>
  </div>
);

export default maincomponent;