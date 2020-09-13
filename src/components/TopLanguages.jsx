import Router from 'next/router';
import React, { useState, useEffect } from 'react';

import styles from '../scss/org.module.scss';
import { getLanguages } from '../services/feed';

import Spinner from './Spinner';
// import UserContext from './UserContext';

export default function TopOrganisation() {
  // const { User } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');
  const [langs, setLangs] = useState([]);
  const [list, setList] = useState([]);
  const [followed, setFollowed] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  async function getLangs() {
    getLanguages().then((res) => {
      if (res != null) {
        setLangs(res);
        setList(res);
      }
      setPageLoading(false);
    });
  }

  useEffect(() => {
    getLangs();
  }, []);

  // SUBMITTING ORGANISATIONS

  const submitLanguages = () => {
    Router.replace('/feed');
  };

  // Search bar function

  const search = (e) => {
    if (e.target.value !== '') {
      const newList = langs.filter((lang) => {
        return lang.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setList(newList);
    } else {
      setList(langs);
    }
  };

  // FOLLOWED FUNCTIONS

  const addFollow = (name) => {
    setFollowed([...followed, name]);
  };
  const removeFollow = (name) => {
    setFollowed([...followed.filter((element) => element !== name)]);
  };

  // FETCHING Languages

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('https://api.github.com/organizations');
  //     const data = await res.json();
  //     setLangs(data);
  //   };
  //   getData();
  // }, []);

  if (pageLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>
            <h1>
              Top Languages
              <hr />
            </h1>
          </div>
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Languages</p>
          </div>
          <div className={styles['search-bar']}>
            <div className={styles['left-col']}>
              <img
                src="/SVG/search-icon.svg"
                alt="search"
                className={styles['search-icon']}
              />
              <input
                type="search"
                name="Search"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                value={searchInput}
                id=""
                onKeyUp={(e) => search(e)}
                className={styles['input-bar']}
                placeholder="Search for Languages..."
              />
            </div>
          </div>
        </div>
        <div />

        <div className={styles['side-image']}>
          <img src="SVG/Group 122.svg" alt="imageside" />
        </div>
      </div>
      <div className={styles['org-container']}>
        <div className={styles['org-list']}>
          {list.length !== 0 ? (
            list.map((lang) => (
              <div
                key={lang}
                style={{
                  backgroundColor: followed.includes(lang)
                    ? '#00B9B3'
                    : '#6C63FF'
                }}
                className={styles['org-card']}>
                <p href={`https://github.com/${lang}`} target="blank">
                  {lang}
                </p>
                <button
                  type="button"
                  style={{
                    backgroundColor: followed.includes(lang)
                      ? 'black'
                      : 'white',
                    color: followed.includes(lang) ? 'white' : 'black'
                  }}
                  onClick={() => {
                    if (followed.includes(lang) === true) {
                      removeFollow(lang);
                    } else {
                      addFollow(lang);
                    }
                  }}>
                  {followed.includes(lang) ? 'Followed' : 'Follow'}
                </button>
              </div>
            ))
          ) : (
            <p>No results...</p>
          )}
        </div>
      </div>
      <div className={styles['button-container']}>
        {followed.length > 4 ? (
          <button
            type="button"
            onClick={submitLanguages}
            className={styles.next}>
            Next
          </button>
        ) : (
          <button
            type="button"
            style={{
              cursor: 'not-allowed',
              backgroundColor: '#727272',
              opacity: '0.3'
            }}
            className={styles.next}>
            Finish
          </button>
        )}
        {followed.length > 4 ? null : (
          <p className={styles.alert}>Please make atleast 5 selections!</p>
        )}
      </div>
    </div>
  );
}
