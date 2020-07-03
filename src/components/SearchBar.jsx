import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from '../scss/searchBar.module.scss';

const SearchBar = ({ page, languageFilter, searchFilter, languageList, sortMethod, actualSortMethodsList, duplicateSortMethodsList, sortOrder}) => {
  
  const [searchValue, setSearchValue] = useState('');
  const [Filter, setFilter] = useState('All');
  const [Sort, setSort] = useState('None');
  const [FilterShow, setFilterShow] = useState(false);
  const [SortShow, setSortShow] = useState(false);
  const [orderShow, setOrderShow] = useState(false);
  const [order, setOrder] = useState('Ascending');

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

  const dropdownToggleOrder = () => {
    setOrderShow(!orderShow);
  }
  const selectFilter = (e) => {
    setFilter(e.target.innerText);
    languageFilter(e.target.innerText);
    dropdownToggleFilter();
  };
  const selectSort = (index) => {
    setSort(duplicateSortMethodsList[index]);
    sortMethod(actualSortMethodsList[index]);
    dropdownToggleSort();
  };

  const selectOrder = (o, hiddenOrder) => {
    setOrder(o);
    sortOrder(hiddenOrder);
    dropdownToggleOrder();
  }

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
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          onKeyPress={(e) => {
              if (e.key === 'Enter') { 
                searchFilter(e.currentTarget.value);
              }
            }}
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
                                      {/* Display sorting methods available */}
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
                {
                  actualSortMethodsList.map((method, index) => {
                    return (
                      <div
                        className={styles['dropdown-items']}
                        key={method}
                        style={{
                          backgroundColor:
                            Sort === duplicateSortMethodsList[index] ? 'rgb(95, 95, 95)' : 'black'
                        }}
                        tabIndex={0}
                        onClick={()=>selectSort(index)}
                        role="button"
                        onKeyDown={()=>selectSort(index)}>
                        {duplicateSortMethodsList[index]}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )}
        </div>                      {/* Show sorting methods ends here */}
                      
                                    {/* Show sorting Order */}
        <div className={styles.filter}>
          <div
            role="button"
            tabIndex={0}
            className={styles['filter-show']}
            onClick={dropdownToggleOrder}
            onKeyDown={dropdownToggleOrder}>
            <p>{order}</p>
            <img src="/SVG/filter-icon.svg" alt="filter-icon" />
          </div>
          {orderShow && (
            <div>
              <div className={styles['filter-dropdown']}>
                
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      order === 'Ascending' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={(e) => selectOrder(e.target.innerText, 'asc')}
                  role="button"
                  onKeyDown={(e) => selectOrder(e.target.innerText, 'asc')}
                >
                  Ascending
                </div>
                <div
                  className={styles['dropdown-items']}
                  style={{
                    backgroundColor:
                      order === 'Descending' ? 'rgb(95, 95, 95)' : 'black'
                  }}
                  tabIndex={0}
                  onClick={(e) => selectOrder(e.target.innerText, 'desc')}
                  role="button"
                  onKeyDown={(e) => selectOrder(e.target.innerText, 'desc')}
                >
                  Descending
                </div>
              </div>
            </div>
          )}
        </div>  
                                    {/* Show Languages Filter only on feed Page */}
        {
          page !== 'organizations' &&
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
                        Filter === 'All' ? 'rgb(95, 95, 95)' : 'black'
                    }}
                    tabIndex={0}
                    onClick={selectFilter}
                    role="button"
                    onKeyDown={selectFilter}>
                  All
                </div>
                {
                  languageList.map(lang => {
                    return (
                      <div
                        key={lang}
                        className={styles['dropdown-items']}
                        style={{
                          backgroundColor:
                            Filter === lang ? 'rgb(95, 95, 95)' : 'black'
                        }}
                        tabIndex={0}
                        onClick={selectFilter}
                        role="button"
                        onKeyDown={selectFilter}>
                        {lang}
                      </div>
                    )
                  })
                }
                </div>
              </div>
            )}
          </div>
        }                           {/* Languages Filter Display ends here */}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
  languageFilter: PropTypes.func,
  languageList: PropTypes.arrayOf(PropTypes.string),
  searchFilter: PropTypes.func.isRequired,
  sortMethod: PropTypes.func.isRequired,
  sortOrder: PropTypes.func.isRequired,
  actualSortMethodsList: PropTypes.arrayOf(PropTypes.string),
  duplicateSortMethodsList: PropTypes.arrayOf(PropTypes.string)
};
SearchBar.defaultProps = {
  languageFilter: null,
  languageList: [],
  actualSortMethodsList: [],
  duplicateSortMethodsList: []
}
export default SearchBar;
