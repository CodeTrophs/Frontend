import Router from 'next/router';
import React, { useState, useContext } from 'react';

import firebase from '../firebase';
import styles from '../scss/org.module.scss';
import UserContext from './UserContext';

export default function TopOrganisation() {
  const { User } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');
  const Langs = [
    'javascript1',
    'javascript2',
    'javascript3',
    'javascript4',
    'javascript5',
    'javascript6',
    'javascript7',
    'javascript8',
    'javascript9',
    'javascript10',
    'javascript11',
    'javascript12',
    'javascript13',
    'javascript14',
    'javascript15',
    'javascript16',
    'javascript17',
    'javascript18',
    'javascript19',
    'javascript20',
    'javascript21',
    'javascript22',
    'javascript23',
    'javascript24',
    'javascript25',
    'javascript26',
    'javascript27',
    'javascript28',
    'javascript29',
    'javascript30'
  ];
  const [list, setList] = useState(Langs);
  const [followed, setFollowed] = useState([]);
  const db = firebase.firestore();

  // SUBMITTING ORGANISATIONS

  const submitLanguages = () => {
    db.collection('users').doc(User.uid).update({
      followingLanguages: followed
    });
    Router.replace({
      pathname: '/setting',
      query: { firstTime: true },
    });
  };

  // Search bar function

  const search = (e) => {
    if (e.target.value !== '') {
      const newList = Langs.filter((lang) => {
        return lang.includes(e.target.value.toLowerCase());
      });
      setList(newList);
    } else {
      setList(Langs);
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
