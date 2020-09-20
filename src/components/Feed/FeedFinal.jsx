import Router from 'next/router';
import React, { useState, useEffect, useContext, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from 'react-toastify';

import styles from '../../scss/feed.module.scss';
import * as feedService from '../../services/feed';
// import AdDisplay from '../AdComponent';
import Card from '../FeedCard';
import LinearLoader from '../LinearLoader';
import SearchBar from '../SearchBar';
import Spinner from '../Spinner';
import UserContext from '../UserContext';
import FeedIntroduction from './FeedIntro';
// import ProjectProfile from '../profile/projectProfile';

export default function FeedFinal() {
  const { User } = useContext(UserContext);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1); // Node id to start after
  const [repoList, setRepoList] = useState([]); // All Repositories List
  const [reachedEnd, setReachedEnd] = useState(false); // Infinite Scrolling : End Reached
  const [searchRepoQuery, setSearchRepoQuery] = useState('');
  const [paramsChanged, setParamsChanged] = useState(false); // To call getNextRepos() after state has been changed when filters are set
  const [reposLoading, setReposLoading] = useState(false);
  const [languageList, setLanguageList] = useState([]); // Language List
  const [sortMethod, setSortMethod] = useState(''); // Sort Method
  const [sortOrder, setSortOrder] = useState('asc'); // Sort Order
  const [organisationList, setOrganisationList] = useState([]); // Organisation List
  const [selectedOrganisation, setSelectedOrganisation] = useState('All'); // Selected Organisation
  const [selectedSortMethod, setSelectedSortMethod] = useState('Best Match'); // Selected Sort Method
  const [selectedLanguagesList, setSelectedLanguagesList] = useState([]);
  const [appliedLanguagesList, setAppliedLanguagesList] = useState([]); // This will be sent for extracting from database
  const [applyLangFilterDisabled, setApplyLangFilterDisabled] = useState(false); // Apply Language filter button (Disabled ?)
  const firstResult = useRef(null); // For scrolling to the first repo on initial render and applying filters
  const [showFilters, setShowFilters] = useState(false);
  const sortList = [
    { actual: '', display: 'Best Match', order: 'asc' },
    { actual: 'forks', display: 'Least Forks', order: 'asc' },
    { actual: 'forks', display: 'Most Forks', order: 'desc' },
    { actual: 'stars', display: 'Least Stars', order: 'asc' },
    { actual: 'stars', display: 'Most Stars', order: 'desc' },
    { actual: 'updated', display: 'Least Recently Updated', order: 'asc' },
    { actual: 'updated', display: 'Recently Updated', order: 'desc' }
  ];
  // Fetch the Repositories

  async function getNextRepos() {
    try {
      const res = await feedService.getRepos(
        pageNo,
        searchRepoQuery,
        appliedLanguagesList,
        selectedOrganisation,
        sortMethod,
        sortOrder
      );
      if (res.status === 200)
        res.data &&
          res.data.data &&
          res.data.data.items &&
          setRepoList([...repoList, res.data.data.items].flat());
      if (res.data.hasNextPage === false) {
        setReachedEnd(true);
      }
      setPageNo(pageNo + 1);
    } catch (res) {
      toast.error(`${res.status} : ${res.message}`);
      setReachedEnd(true);
    }
    setPageLoading(false);
    setReposLoading(false);
  }

  // Get Available Languages

  async function getLanguages() {
    try {
      const res = await feedService.getLanguages();
      setLanguageList(res);
    } catch (res) {
      setLanguageList([]);
    }
  }

  // Get Available Organisations
  async function getOrganisations() {
    try {
      const res = await feedService.getOrganisationList();
      setOrganisationList(res);
    } catch (res) {
      setOrganisationList([]);
    }
  }
  // Initial Rendering
  useEffect(() => {
    if (User) {
      getLanguages();
      getOrganisations();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [User]);

  // Detect and Change sortOrder, search Bar text, sort Method, language filter

  useEffect(() => {
    setPageNo(1);
    setRepoList([]);
    setReposLoading(true);
    if (searchRepoQuery !== '' && sortMethod === 'full_name') {
      setSortMethod('');
    }
    setParamsChanged(!paramsChanged);
  }, [
    appliedLanguagesList,
    searchRepoQuery,
    sortMethod,
    sortOrder,
    selectedOrganisation
  ]);

  useEffect(() => {
    if (selectedLanguagesList.length > 1) setApplyLangFilterDisabled(true);
    else setApplyLangFilterDisabled(false);
  }, [selectedLanguagesList]);

  useEffect(() => {
    if (paramsChanged !== null) getNextRepos();
    if (firstResult.current) {
      window.scrollTo({
        top: firstResult.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [paramsChanged]);

  // Apply Langauges Filter
  const applyLanguagesFilter = () => {
    // if (selectedLanguagesList.length > 1) {
    //   return;
    // }
    setAppliedLanguagesList(selectedLanguagesList);
  };
  // Clear All Filters
  const clearAllFilters = () => {
    Router.reload();
  };

  if (pageLoading) return <Spinner />;

  return (
    <div>
      <FeedIntroduction />
      {/* <AdDisplay /> */}
      <div className={styles.search}>
        <SearchBar
          page="feed"
          searchFilter={(repoName) => setSearchRepoQuery(repoName)}
        />
        <button
          type="button"
          className={styles['filter-icon']}
          onClick={() => {
            setShowFilters(!showFilters);
            document.body.style.overflow = 'hidden';
          }}>
          <img src="/SVG/filter-icon-black.svg" alt="Filters" />
        </button>
      </div>
      {/* ==================================================================================================================================== */}
      {/** Applied Filters Tags */}
      <div className={styles['filter-tags']}>
        {selectedLanguagesList.length !== 0 ? (
          selectedLanguagesList.sort().map((lang) => {
            return (
              <div key={lang} className={styles['filter-tag']}>
                {' '}
                {lang}{' '}
              </div>
            );
          })
        ) : (
          <div className={styles['filter-tag']}> All Languages </div>
        )}
        {selectedOrganisation && (
          <div className={styles['filter-tag']}>
            <strong>Organisation :</strong>{' '}
            {selectedOrganisation[0].toUpperCase() +
              selectedOrganisation.slice(1).toLowerCase()}{' '}
          </div>
        )}
        <div className={styles['filter-tag']}>
          <strong>Sort By :</strong> {selectedSortMethod}
        </div>
        {(selectedOrganisation !== 'All' ||
          selectedLanguagesList.length !== 0 ||
          sortMethod !== '') && (
          <button
            onClick={clearAllFilters}
            className={styles['clear-button']}
            type="button">
            Clear All
          </button>
        )}
      </div>

      <div className={styles['disp-flex-bottom']}>
        {/* ==================================================================================================================================== */}
        {/* Display the filters here  */}
        <div className={styles.filterbox}>
          <h1> Filters </h1>
          {/* Languages */}
          <h3>
            {' '}
            Languages
            {JSON.stringify(selectedLanguagesList) !==
              JSON.stringify(appliedLanguagesList) && (
              <button
                type="button"
                className={styles['apply-filter-button']}
                onClick={applyLanguagesFilter}
                disabled={applyLangFilterDisabled}>
                {' '}
                Apply filter
              </button>
            )}
          </h3>
          {applyLangFilterDisabled === true && (
            <span style={{ color: `#ff0000` }}>Select Max. 1 language</span>
          )}
          <div
            id="languages"
            className={`${styles['data-list']} ${
              applyLangFilterDisabled ? styles['error-list'] : ''
            } `}>
            <div key='all'>
            <input
                    type="radio"
                    value='All'
                    name="language"
                    defaultChecked
                    onChange={() => {
                      // if (
                      //   selectedLanguagesList.find(
                      //     (el) => el === e.target.value
                      //   ) !== undefined
                      // ) {
                      //   setSelectedLanguagesList([
                      //     ...selectedLanguagesList.filter(
                      //       (el) => el !== e.target.value
                      //     )
                      //   ]);
                      // } else
                      //   setSelectedLanguagesList([
                      //     ...selectedLanguagesList,
                      //     e.target.value
                      //   ]);
                      const sel = [];
                      setSelectedLanguagesList(sel);
                    setAppliedLanguagesList(sel);
                    }}
                  />
                  All
                </div>
            {languageList.map((lang) => {
              return (
                <div key={lang}>
                  <input
                    type="radio"
                    value={lang}
                    name="language"
                    onChange={(e) => {
                      // if (
                      //   selectedLanguagesList.find(
                      //     (el) => el === e.target.value
                      //   ) !== undefined
                      // ) {
                      //   setSelectedLanguagesList([
                      //     ...selectedLanguagesList.filter(
                      //       (el) => el !== e.target.value
                      //     )
                      //   ]);
                      // } else
                      //   setSelectedLanguagesList([
                      //     ...selectedLanguagesList,
                      //     e.target.value
                      //   ]);
                      const sel = [e.target.value];
                      setSelectedLanguagesList(sel);
                    setAppliedLanguagesList(sel);
                    }}
                  />
                  {'  '} {lang}
                </div>
              );
            })}
          </div>
          {/* Organisations */}
          <h3>Organisations</h3>
          <div
            id="organisations"
            className={styles['data-list']}
            onChange={(e) => {
              setSelectedOrganisation(e.target.value);
            }}>
            <div key="All">
              <input
                type="radio"
                value="All"
                defaultChecked
                name="Organisation"
              />{' '}
              All
            </div>
            {organisationList.map((org) => {
              return (
                <div key={org}>
                  <input type="radio" value={org} name="Organisation" />{' '}
                  {org[0].toUpperCase() + org.slice(1).toLowerCase()}
                </div>
              );
            })}
          </div>
          {/* Sort Methods */}
          <h3>Sort By</h3>
          <div
            id="sortMethods"
            style={{ margin: '1rem 0' }}
            onChange={(e) => {
              setSortMethod(e.target.value.split(',')[0]);
              setSortOrder(e.target.value.split(',')[1]);
              setSelectedSortMethod(e.target.id);
            }}>
            {sortList.map((method) => {
              return (
                <div key={method.display}>
                  <input
                    type="radio"
                    defaultChecked={method.actual === ''}
                    id={method.display}
                    value={[method.actual, method.order]}
                    name="sortMethod"
                  />{' '}
                  {method.display}
                </div>
              );
            })}
          </div>
        </div>
        {/* ==================================================================================================================================== */}
        {/* Display Mobile Filters here */}
        {showFilters && (
          <div className={styles['mobile-view-filters-outer']}>
            <div className={styles['mobile-view-filters']}>
              <h1>
                {' '}
                Filters
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLanguagesList(appliedLanguagesList);
                    setShowFilters(false);
                    document.body.style.overflow = 'auto';
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'absolute',
                    right: '10%',
                    cursor: 'pointer'
                  }}>
                  <img
                    src="/SVG/cross-icon.png"
                    alt="x"
                    style={{ width: '20px' }}
                  />
                </button>
              </h1>
              {/* Languages */}
              <h3> Languages </h3>
              {applyLangFilterDisabled === true && (
                <span style={{ color: `#ff0000` }}>Select Max. 1 language</span>
              )}
              <div
                id="languages"
                className={`${styles['data-list']} ${
                  applyLangFilterDisabled ? styles['error-list'] : ''
                } `}>
                {languageList.map((lang) => {
                  return (
                    <div key={lang}>
                      <input
                        type="checkbox"
                        value={lang}
                        name="language"
                        defaultChecked={
                          selectedLanguagesList.find((el) => el === lang) !==
                          undefined
                        }
                        onChange={(e) => {
                          if (
                            selectedLanguagesList.find(
                              (el) => el === e.target.value
                            ) !== undefined
                          ) {
                            setSelectedLanguagesList([
                              ...selectedLanguagesList.filter(
                                (el) => el !== e.target.value
                              )
                            ]);
                          } else
                            setSelectedLanguagesList([
                              ...selectedLanguagesList,
                              e.target.value
                            ]);
                        }}
                      />
                      {'  '} {lang}
                    </div>
                  );
                })}
              </div>
              {/* Organisations */}
              <h3>Organisations</h3>
              <div
                id="organisations"
                className={styles['data-list']}
                onChange={(e) => {
                  setSelectedOrganisation(e.target.value);
                }}>
                <div key="All">
                  <input
                    type="radio"
                    value="All"
                    defaultChecked={selectedOrganisation === 'All'}
                    name="Organisation"
                  />{' '}
                  All
                </div>
                {organisationList.map((org) => {
                  return (
                    <div key={org}>
                      <input
                        type="radio"
                        value={org}
                        defaultChecked={selectedOrganisation === org}
                        name="Organisation"
                      />{' '}
                      {org[0].toUpperCase() + org.slice(1).toLowerCase()}
                    </div>
                  );
                })}
              </div>
              {/* Sort Methods */}
              <h3>Sort By</h3>
              <div
                id="sortMethods"
                className={styles['data-list']}
                onChange={(e) => {
                  setSortMethod(e.target.value.split(',')[0]);
                  setSortOrder(e.target.value.split(',')[1]);
                  setSelectedSortMethod(e.target.id);
                }}>
                {sortList.map((method) => {
                  return (
                    <div key={method.display}>
                      <input
                        type="radio"
                        defaultChecked={method.actual === ''}
                        id={method.display}
                        value={[method.actual, method.order]}
                        name="sortMethod"
                      />{' '}
                      {method.display}
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                className={styles['apply-filter-button']}
                onClick={() => {
                  applyLanguagesFilter();
                  setShowFilters(false);
                  document.body.style.overflow = 'auto';
                }}
                disabled={applyLangFilterDisabled}>
                {' '}
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* ==================================================================================================================================== */}
        {/* Display the repos/ projects here */}
        <div ref={firstResult} />
        {reposLoading === false && (
          <InfiniteScroll
            dataLength={repoList.length}
            next={getNextRepos}
            hasMore={!reachedEnd}
            scrollThreshold="95%"
            style={{ paddingTop: '1rem' }}
            loader={<LinearLoader />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                {repoList.length > 0 ? (
                  <b>Yay! You have seen it all</b>
                ) : (
                  <b style={{ color: 'red' }}>No Repositories found!</b>
                )}
              </p>
            }>
            {repoList.map((repo) => {
              return <Card key={repo.id} repo={repo} isStarredProp={false} />;
            })}
          </InfiniteScroll>
        )}
        {reposLoading === true && <LinearLoader />}
      </div>
    </div>
  );
}
