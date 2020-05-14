import React, { useState } from 'react';
import styles from '../../css/feed.module.css';

const FeedLang = () => {
  const [state, setState] = useState(false);

  const dropDown = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };
    return (
      <div className={styles["smallbox"]}>
        <div className={styles["Language-Head"]}>
          <div className={styles["disp-flex"]}>
            <div className={styles["lang-space"]}>
              <p>Top Languages</p>
            </div>
            <button type="button" onClick={dropDown} className={styles["btn-drop"]}>
              <img src="SVG/dropdown-icon.svg" alt="dropdown"></img>
            </button>
          </div>
        </div>
        <div style={{ display: state ? "block" : "none" }}>
          <div className={styles["Languages"]}>
            <div className={styles["disp-flex"]}>
              <div className={styles["Languages-num"]}>
                <p>1.</p>
              </div>
              <div className={styles["Languages-js"]}>
                <div>
                <p >Javascript</p></div>
                <div className={styles["small-follow"]}><p>Follow</p></div>
              </div>
            </div>
            <div className={styles["disp-flex"]}>
              <div className={styles["Languages-num"]}>
                <p>2.</p>
              </div>
              <div className={styles["Languages-css"]}>
                <div>
                <p >CSS</p></div>
                <div className={styles["small-follow"]}><p>Follow</p></div>
              </div>
            </div>
            <div className={styles["disp-flex"]}>
              <div className={styles["Languages-num"]}>
                <p>3.</p>
              </div>
              <div  className={styles["Languages-node"]}>
                <div>
                <p>Node</p></div>
                <div className={styles["small-follow"]}><p>Follow</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default FeedLang;
