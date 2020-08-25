import { func, arrayOf, bool, string } from 'prop-types';
import React from 'react';

import styles from '../../../../scss/feed.module.scss';
import sortList from '../../../../static/sortList';

const MobileFilters = ({
  selectedLanguagesList,
  setSelectedLanguagesList,
  appliedLanguagesList,
  applyLanguagesFilter,
  applyLangFilterDisabled,
  languageList,
  setSelectedOrganisation,
  organisationList,
  setSortMethod,
  setSortOrder,
  setSelectedSortMethod,
  setShowFilters,
  selectedOrganisation
}) => {
  return (
    <div>
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
            <span style={{ color: `#ff0000` }}>Select Max. 5 languages</span>
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
                    defaultChecked={method.actual === 'node_id'}
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
    </div>
  );
};

MobileFilters.propTypes = {
  setSortMethod: func.isRequired,
  setSortOrder: func.isRequired,
  setSelectedOrganisation: func.isRequired,
  setSelectedLanguagesList: func.isRequired,
  setSelectedSortMethod: func.isRequired,
  organisationList: arrayOf({}).isRequired,
  selectedLanguagesList: arrayOf({}).isRequired,
  appliedLanguagesList: arrayOf({}).isRequired,
  applyLanguagesFilter: func.isRequired,
  applyLangFilterDisabled: bool.isRequired,
  languageList: arrayOf({}).isRequired,
  setShowFilters: func.isRequired,
  selectedOrganisation: string.isRequired
};

export default MobileFilters;
