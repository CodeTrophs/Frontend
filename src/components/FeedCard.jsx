import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';

import { toast } from 'react-toastify';

import styles from '../scss/card.module.scss';
import { starRepo, unStarRepo, forkRepo } from '../services/feed';
import LinearLoader from './LinearLoader';
import UserContext from './UserContext';

// eslint-disable-next-line
export default function Card({ repo, isStarredProp }) {
  const [isStarred, setIsStarred] = useState(isStarredProp);
  const [starring, setStarring] = useState(false);
  const [forking, setForking] = useState(false);
  const [isForked, setIsForked] = useState(false);
  const { User } = useContext(UserContext)
  const changeStar = async (method, name) => {
    if (method === 'remove') {
      try {
        await unStarRepo(name);
      } catch (res) {
        toast.error(`${res.status} : ${res.message}`);
      }
    } else {
      try {
        await starRepo(name);
      } catch (res) {
        toast.error(`${res.status} : ${res.message}`);
      }
    }
    setIsStarred(!isStarred);
    setStarring(false);
  };
  const fork = async (name) => {
    try {
      await forkRepo(name);
    }
    catch (res) {
      toast.error(`${res.status} : ${res.message}`);
    }
    setIsForked(true);
    setForking(false);
  }
  return (
    <div>
      <div className={isStarred ? styles.starredRepo : styles['big-box']}>
        <div className={styles.flex}>
          <div className={styles['left-col']}>
            <img
              src={repo.owner && repo.owner.avatar_url && repo.owner.avatar_url}
              className={styles.repoOwnerImage}
              alt="Organisation Logo"
            />
            <div className={styles.stars}>
              <img src="images/star.png" alt="stars" />
              <p>{repo.watchers}</p>
            </div>
          </div>
          <div className={styles.middle}>
            <Link
              href={{ pathname: `/project/[pid]` }}
              as={`/project/${`${repo.full_name.split('/')[0]} ${
                repo.full_name.split('/')[1]
              }`}`}>
              <div className={styles.heading}>
                <p>{repo.full_name.split('/')[1]}</p>
              </div>
            </Link>
            <div>
              <div className={styles.date}>
                <p>
                  By{' '}
                  <em style={{ color: 'green' }}>
                    {repo.full_name.split('/')[0]}
                  </em>{' '}
                  | Updated : {repo.updated_at && repo.updated_at.slice(0, 10)}
                </p>
              </div>
              <p>{repo.description}</p>
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
                {forking === false && (
                  <button className={styles['smallbox-below']}
                    type = "button"
                    disabled = {isForked || (User && User.userName === repo.full_name.split('/')[0])} 
                    onClick = {() => {
                      setForking(true);
                      fork(repo.full_name)
                    }}>
                    <div className={styles.flex}>
                      <img src="SVG/pr.svg" alt="fork" />
                      <p>{ isForked ? 'Forked' : 'Fork' }:{repo.forks}</p>
                    </div>
                  </button>
                )}
                {forking && <LinearLoader/>}
              </div>
            </div>
            {starring === false && (
              <button
                type="button"
                className={
                  isStarred === true
                    ? styles.starredButton
                    : styles.unStarredButton
                }
                onClick={() => {
                  setStarring(true);
                  if (isStarred === true) {
                    changeStar('remove', repo.full_name);
                  } else {
                    changeStar('add', repo.full_name);
                  }
                }}>
                {isStarred ? 'UnStar' : 'Star'}
              </button>
            )}
            {starring && <LinearLoader />}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string,
    updated_at: PropTypes.string,
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
    })
  }).isRequired,
  isStarredProp: PropTypes.bool.isRequired
};
