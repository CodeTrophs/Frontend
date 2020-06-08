import Router from 'next/router';
import React, { useState, useEffect, useContext } from 'react';

import firebase from '../firebase';
import styles from '../scss/org.module.scss';
import UserContext from './UserContext';

export default function TopOrganisation() {
  const { User } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');
  const [Orgs, setOrgs] = useState([]);
  const [list, setList] = useState([]);
  const [followed, setFollowed] = useState([]);
  const db = firebase.firestore();

  // SUBMITTING ORGANISATIONS

  const submitOrganisations = () => {
    db.collection('users').doc(User.uid).update({
      followingOrganisations: followed
    });
    Router.replace('/toplang');
  };

  // Search bar function

  const search = (e) => {
    if (e.target.value !== '') {
      const newList = Orgs.filter((org) => {
        return org.login.includes(e.target.value.toLowerCase());
      });
      setList(newList);
    } else {
      setList(Orgs);
    }
  };

  // FOLLOWED FUNCTIONS

  const addFollow = (name) => {
    setFollowed([...followed, name]);
  };
  const removeFollow = (name) => {
    setFollowed([...followed.filter((element) => element !== name)]);
  };

  // FETCHING ORGANISATIONS

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://api.github.com/organizations');
      const data = await res.json();
      setOrgs(data);
      setList(data);
    };
    getData();
  }, []);

  // SLIDE BUTTONS

  const slideRight = (e) => {
    e.preventDefault();
    list.current.scrollLeft += 600;
  };
  const slideLeft = (e) => {
    e.preventDefault();
    list.current.scrollLeft -= 600;
  };

  return (
    <div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>
            <h1>
              Top Organisations
              <hr />
            </h1>
          </div>
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Organisation</p>
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
                placeholder="Search for Organisation"
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
        <button
          type="button"
          onKeyDown={slideLeft}
          onClick={slideLeft}
          className={styles['slide-left']}>
          <img src="/SVG/arrow-left.svg" alt="<" type="button" />
        </button>

        <div className={styles['org-list']}>
          {list.length !== 0 ? (
            list.map((org) => (
              <div
                style={{
                  backgroundColor: followed.includes(org.login)
                    ? '#00B9B3'
                    : '#6C63FF'
                }}
                className={styles['org-card']}
                key={org.id}>
                <img src={org.avatar_url} alt="" />
                <p href={`https://github.com/${org.login}`} target="blank">
                  {org.login}
                </p>
                <button
                  type="button"
                  style={{
                    backgroundColor: followed.includes(org.login)
                      ? 'black'
                      : 'white',
                    color: followed.includes(org.login) ? 'white' : 'black'
                  }}
                  onClick={() => {
                    if (followed.includes(org.login) === true) {
                      removeFollow(org.login);
                    } else {
                      addFollow(org.login);
                    }
                  }}>
                  Follow
                </button>
              </div>
            ))
          ) : (
            <p>No results...</p>
          )}
        </div>

        <button
          type="button"
          onKeyDown={slideRight}
          onClick={slideRight}
          className={styles['slide-right']}>
          <img src="/SVG/arrow-right.svg" alt=">" type="button" />
        </button>
      </div>
      <div className={styles['button-container']}>
        {followed.length > 4 ? (
          <button
            type="button"
            onClick={submitOrganisations}
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
            Next
          </button>
        )}
        {followed.length > 4 ? null : <p>Please make atleast 5 selections!</p>}
      </div>
    </div>
  );
}
