import { func, arrayOf, bool } from 'prop-types';
import React from 'react';

import styles from '../../../scss/feed.module.scss';
import sortList from '../../../static/sortList';

const Filters = ({
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
}) => {
  return (
    <div>
      <div className={styles.filterbox}>
        <h1> Filters </h1>
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
      </div>
    </div>
  );
};

Filters.propTypes = {
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
};

export default Filters;
