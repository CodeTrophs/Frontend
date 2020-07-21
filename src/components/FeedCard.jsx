import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from '../scss/card.module.scss';
import LinearLoader from './LinearLoader';

export default function Card({ repo, isSaved, changeSaveOption }) {
  const [saving, setSaving] = useState(false);
  return (
    <div>
      <div className={isSaved ? styles.savedRepo : styles['big-box']}>
        <div className={styles.flex}>
          <div className={styles['left-col']}>
            <img src={repo.owner.avatar_url} className={styles.repoOwnerImage} alt="Organisation Logo" />
            <div className={styles.stars}>
              <img src="images/star.png" alt="stars" />
              <p>{repo.watchers}</p>
            </div>
          </div>
          <div className={styles.middle}>
            <Link href={{ pathname: `/project/[pid]`, query: {id: repo.node_id, url:repo.html_url} }} as='/project/pid'>
              <div className={styles.heading}>
                <p>{repo.full_name.split('/')[1]}</p>
              </div>
            </Link>
            <div>
              <div className={styles.date}>
                <p>By <em style={{color:"green"}}>{repo.full_name.split('/')[0]}</em> | {repo.pushed_at.slice(0,10)}</p>
              </div>
              <p>
               {repo.description}
              </p>
            </div>
            <div className={styles.flex}>
              <div className={styles.langButton}>
                <p className={styles['language-tag']}>{repo.language}</p>
              </div>
            </div>
          </div>
          <div className={styles.save}>
            <div className={styles.flex}>
              <div className={styles['smallbox-below']}>
                <div className={styles.flex}>
                    <img
                      src="SVG/Icon awesome-exclamation-circle.svg"
                      alt="issue"
                    />
                  <p>Issues:{repo.open_issues}</p>
                </div>
              </div>
              <div>
                <div className={styles['smallbox-below']}>
                  <div className={styles.flex}>
                      <img src="SVG/pr.svg" alt="fork" />
                    <p>Forks:{repo.forks}</p>
                  </div>
                </div>
              </div>
            </div>
            {saving === true && <LinearLoader />}
            {saving === false &&
              <button
                type="button"
                className={isSaved === true ? styles.savedButton : styles.unSavedButton}
                onClick={() => {
                  setSaving(true);
                  if (isSaved === true) {
                    changeSaveOption('remove').then(() => {
                      setSaving(false);
                    });
                  }
                  else
                    changeSaveOption('add').then(() => {
                      setSaving(false);
                    });
                }}>
                {isSaved ? 'Saved' : 'Save'}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string,
    pushed_at: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    open_issues: PropTypes.number,
    forks: PropTypes.number,
    watchers: PropTypes.number,
    id: PropTypes.number,
    node_id: PropTypes.string,
    html_url: PropTypes.string,
    owner: PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string
    }),
  }).isRequired,
  isSaved: PropTypes.bool.isRequired,
  changeSaveOption: PropTypes.func.isRequired
};