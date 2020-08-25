import Router from 'next/router';
import React, { useState, useEffect, useContext, useRef } from 'react';

import { toast } from 'react-toastify';

import Adsense from '../../components/Adsense';
import FeedIntroduction from '../../components/Feed/FeedIntro';
import LinearLoader from '../../components/LinearLoader';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import UserContext from '../../context/UserContext';
import styles from '../../scss/feed.module.scss';
import {
  getRepos,
  getLanguageList,
  getSavedRepoList,
  setSavedRepoList,
  getOrganisationList
} from '../../utils/Firestore/feedData';
import FeedRepos from './FeedRepos';
import Filters from './Filters';
import MobileFilters from './Filters/MobileFilters';
// import ProjectProfile from '../profile/projectProfile';

export default function FeedFinal() {
  const { User } = useContext(UserContext);
  const [pageLoading, setPageLoading] = useState(true);
  const [currentLastNodeId, setCurrentLastNodeId] = useState(null); // Node id to start after
  const [repoList, setRepoList] = useState([]); // All Repositories List
  const [reachedEnd, setReachedEnd] = useState(false); // Infinite Scrolling : End Reached
  const [searchRepoQuery, setSearchRepoQuery] = useState('');
  const [paramsChanged, setParamsChanged] = useState(false); // To call getNextRepos() after state has been changed when filters are set
  const [reposLoading, setReposLoading] = useState(false);
  const [languageList, setLanguageList] = useState([]); // Language List
  const [sortMethod, setSortMethod] = useState('node_id'); // Sort Method
  const [sortOrder, setSortOrder] = useState('asc'); // Sort Order
  const [savedRepos, setSavedRepos] = useState([]); // Saved Repos List
  const [organisationList, setOrganisationList] = useState([]); // Organisation List
  const [selectedOrganisation, setSelectedOrganisation] = useState('All'); // Selected Organisation
  const [selectedSortMethod, setSelectedSortMethod] = useState('Best Match'); // Selected Sort Method
  const [selectedLanguagesList, setSelectedLanguagesList] = useState([]);
  const [appliedLanguagesList, setAppliedLanguagesList] = useState([]); // This will be sent for extracting from database
  const [applyLangFilterDisabled, setApplyLangFilterDisabled] = useState(false); // Apply Language filter button (Disabled ?)
  const firstResult = useRef(null); // For scrolling to the first repo on initial render and applying filters
  const [showFilters, setShowFilters] = useState(false);

  // Fetch the Repositories
  async function getNextRepos() {
    getRepos(
      currentLastNodeId,
      searchRepoQuery,
      appliedLanguagesList,
      selectedOrganisation,
      sortMethod,
      sortOrder
    ).then((resp) => {
      const res = [];
      let lastDoc = null;
      if (resp === null) {
        toast.error('Some Error Occurred! Please Refresh the Page.');
        setReachedEnd(true);
      } else {
        resp.docs.forEach((doc) => {
          res.push(doc.data());
          lastDoc = doc;
        });
        if (res.length > 0) {
          if (res.length < 20) {
            setReachedEnd(true);
          } else setReachedEnd(false);
          setRepoList([...repoList, res].flat());
          setCurrentLastNodeId(lastDoc);
        }
        if (res.length === 0) {
          setReachedEnd(true);
        }
      }
      setPageLoading(false);
      setReposLoading(false);
    });
  }

  // Get Available Languages
  async function getLanguages() {
    getLanguageList().then((res) => {
      setLanguageList(res);
    });
  }

  // Get Available Organisations
  async function getOrganisations() {
    getOrganisationList().then((res) => {
      setOrganisationList(res);
    });
  }

  // Call Required functions
  async function InitialLoad() {
    getSavedRepoList(User.uid).then((res) => {
      setSavedRepos(res);
      getNextRepos();
      getLanguages();
      getOrganisations();
    });
  }

  // Initial Rendering
  useEffect(() => {
    if (User) {
      InitialLoad();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [User]);

  // Detect and Change sortOrder, search Bar text, sort Method, language filter
  useEffect(() => {
    if (sortOrder === 'asc') {
      setCurrentLastNodeId(null);
    } else setCurrentLastNodeId({});
    setRepoList([]);
    setReposLoading(true);
    if (searchRepoQuery !== '' && sortMethod === 'full_name') {
      setSortMethod('node_id');
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
    if (selectedLanguagesList.length > 5) setApplyLangFilterDisabled(true);
    else setApplyLangFilterDisabled(false);
  }, [selectedLanguagesList]);

  useEffect(() => {
    getNextRepos();
    if (firstResult.current) {
      window.scrollTo({
        top: firstResult.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [paramsChanged]);

  // Change Saved Repo List depending on method either to remove or to add
  const changeSavedList = async (nodeId, method) => {
    if (User) {
      if (method === 'remove')
        setSavedRepos([...savedRepos.filter((id) => id !== nodeId)]);
      else setSavedRepos([...savedRepos, nodeId]);

      return setSavedRepoList(User.uid, method, nodeId).then(() => {
        return 'complete';
      });
    }
    return 'complete';
  };

  // Apply Langauges Filter
  const applyLanguagesFilter = () => {
    if (selectedLanguagesList.length > 5) {
      return;
    }
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
      <Adsense />
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
          sortMethod !== 'node_id') && (
          <button
            onClick={clearAllFilters}
            className={styles['clear-button']}
            type="button">
            Clear All
          </button>
        )}
      </div>
      <div className={styles['disp-flex-bottom']}>
        <Filters
          selectedLanguagesList={selectedLanguagesList}
          setSelectedLanguagesList={setSelectedLanguagesList}
          appliedLanguagesList={appliedLanguagesList}
          applyLanguagesFilter={applyLanguagesFilter}
          applyLangFilterDisabled={applyLangFilterDisabled}
          languageList={languageList}
          setSelectedOrganisation={setSelectedOrganisation}
          organisationList={organisationList}
          setSortMethod={setSortMethod}
          setSortOrder={setSortOrder}
          setSelectedSortMethod={setSelectedSortMethod}
        />

        {showFilters && (
          <MobileFilters
            selectedLanguagesList={selectedLanguagesList}
            setSelectedLanguagesList={setSelectedLanguagesList}
            appliedLanguagesList={appliedLanguagesList}
            applyLanguagesFilter={applyLanguagesFilter}
            applyLangFilterDisabled={applyLangFilterDisabled}
            languageList={languageList}
            setSelectedOrganisation={setSelectedOrganisation}
            organisationList={organisationList}
            setSortMethod={setSortMethod}
            setSortOrder={setSortOrder}
            setSelectedSortMethod={setSelectedSortMethod}
            setShowFilters={setShowFilters}
            selectedOrganisation={selectedOrganisation}
          />
        )}

        {/* ==================================================================================================================================== */}
        {/* Display the repos/ projects here */}
        <div ref={firstResult} />
        {reposLoading === false && (
          <FeedRepos
            repoList={repoList}
            getNextRepos={getNextRepos}
            reachedEnd={reachedEnd}
            savedRepos={savedRepos}
            changeSavedList={changeSavedList}
          />
        )}
        {reposLoading === true && <LinearLoader />}
      </div>
    </div>
  );
}
