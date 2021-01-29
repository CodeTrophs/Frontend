import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from '../scss/searchBar.module.scss';

const SearchBar = ({ page, searchFilter, method }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className={styles['search-bar']}>
      <div className={styles['left-col']}>
        <div className={styles['search-bar-icon']}>
          <img
            src="/SVG/search-icon.svg"
            alt="search"
            style={{ width: '20px', backgroundColor: '#C31A37' }}
          />
        </div>
        <input
          type="search"
          name="Search"
          id=""
          placeholder={`Search for ${page}`}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.currentTarget.value);
            method === 'onChange' && searchFilter(e.currentTarget.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchFilter(e.currentTarget.value);
            }
          }}
          style={{
            border: 'none',
            color: 'black',
            backgroundColor: 'white',
            fontSize: '18px',
            fontWeight: '500',
            width: '100%',
            marginLeft: '20px',
            outline: 'none',
            borderRadius: '0 100px 100px 0'
          }}
        />
      </div>
    </div>
  );
};

SearchBar.defaultProps = {
  method: ''
};

SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
  searchFilter: PropTypes.func.isRequired,
  method: PropTypes.string
};
export default SearchBar;
