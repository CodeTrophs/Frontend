import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from '../scss/searchBar.module.scss';

const SearchBar = ({ page }) => {
  const [Filter, setFilter] = useState('Python');
  const [Sort, setSort] = useState('Explore');

  const [FilterShow, setFilterShow] = useState(false);
  const [SortShow, setSortShow] = useState(false);

  const dropdownToggleFilter = () => {
    if (FilterShow) {
      setFilterShow(false);
    } else {
      setFilterShow(true);
    }
  };

  const dropdownToggleSort = () => {
    if (SortShow) {
      setSortShow(false);
    } else {
      setSortShow(true);
    }
  };
  const selectFilter = (e) => {
    setFilter(e.target.innerText);
    dropdownToggleFilter();
  };
  const selectSort = (e) => {
    setSort(e.target.innerText);
    dropdownToggleSort();
  };

  return (
    <div className={styles['search-bar']}>
      <div className={styles['left-col']}>
        <img
          src="/SVG/search-icon.svg"
          alt="search"
          style={{ width: '20px'}}
        />
        <input
          type="search"
          name="Search"
          id=""
          placeholder={`Search for ${page}`}
          style={{
            border: 'none',
            color: 'white',
            backgroundColor: 'black',
            fontSize: '18px',
            fontWeight: '300',
            width: '300px',
            marginLeft: '20px',
            outline: 'none'
          }}
        />
      </div>
      <div className={styles['right-col']}>
        <div className={styles.filter}>
          <div
            role="button"
            tabIndex={0}
            className={styles['filter-show']}
            onClick={dropdownToggleSort}
            onKeyDown={dropdownToggleSort}>
            <p>{Sort}</p>
            <img src="/SVG/filter-icon.svg" alt="filter-icon" />
          </div>
          {SortShow && (
            <div>
              <div className={styles['filter-dropdown']}>
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      Sort === 'Explore' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={selectSort}
                  role="button"
                  onKeyDown={selectSort}>
                  Explore
                </div>
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      Sort === 'Trending' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={selectSort}
                  role="button"
                  onKeyDown={selectSort}>
                  Trending
                </div>
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      Sort === 'GSOC' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={selectSort}
                  role="button"
                  onKeyDown={selectSort}>
                  GSOC
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.filter}>
          <div
            className={styles['filter-show']}
            tabIndex={0}
            onClick={dropdownToggleFilter}
            role="button"
            onKeyDown={dropdownToggleFilter}>
            <p>{Filter}</p>
            <img src="/SVG/filter-funnel-icon.svg" alt="filter-icon" />
          </div>
          {FilterShow && (
            <div>
              <div className={styles['filter-dropdown']}>
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      Filter === 'JavaScript' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={selectFilter}
                  role="button"
                  onKeyDown={selectFilter}>
                  JavaScript
                </div>
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      Filter === 'CSS' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={selectFilter}
                  role="button"
                  onKeyDown={selectFilter}>
                  CSS
                </div>
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      Filter === 'Python' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={selectFilter}
                  role="button"
                  onKeyDown={selectFilter}>
                  Python
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  page: PropTypes.string.isRequired
};

export default SearchBar;
