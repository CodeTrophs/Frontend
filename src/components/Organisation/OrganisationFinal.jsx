import React, { useState, useEffect } from 'react';

// import AdDisplay from '../src/components/AdComponent';
import styles from '../../scss/organisations.module.scss';
import Organisations from '../../services/organisations.json';
import LandingContainer from '../LandingContainer';
import SearchBar from '../SearchBar';
import Modal from './Modal';
import Organisation from './Organisation';

const OrganisationFinal = () => {
  const [showModal, setShowModal] = useState(false);
  const [allOrgs, setAllOrgs] = useState([]);
  const [filterOrgs, setFilterOrgs] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [orgData, setOrgData] = useState(null);

  useEffect(() => {
    setAllOrgs(Organisations.data);
    setFilterOrgs(Organisations.data);
  }, []);

  useEffect(() => {
    if (searchFilter === '') setFilterOrgs(Organisations.data);
    else {
      setFilterOrgs(
        allOrgs.filter(
          (obj) =>
            obj.name.toLowerCase().search(searchFilter.toLowerCase()) !== -1
        )
      );
    }
  }, [searchFilter]);

  const toggleModal = (org) => {
    if (org !== null) {
      setOrgData(org);
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      setShowModal(false);
      document.body.style.overflow = 'initial';
    }
  };
  return (
    <div>
      <LandingContainer
        title="Organizations"
        line1="Find an organization to contribute to."
        line2="Can&apos;t find the organization you are searching for?"
        line3="Search below to narrow down your results."
        imgsrc="/SVG/organisation-imgsrc.png"
      />
      {/* <AdDisplay /> */}
      <SearchBar
        page="organizations"
        searchFilter={(text) => setSearchFilter(text)}
        method="onChange"
      />
      <div className={styles['organisations-grid']}>
        {filterOrgs.map((organisation) => (
          <Organisation
            className={styles.card}
            key={organisation.name + organisation.topics}
            org={organisation}
            tech={organisation.technologies.split('|')}
            topics={organisation.topics.split('|')}
            showModal={(data) => toggleModal(data)}
          />
        ))}
      </div>
      {filterOrgs.length === 0 && (
        <h2 className={styles['not-found']}>No Organisations Found</h2>
      )}
      {showModal && (
        <Modal
          org={orgData}
          hideModal={() => toggleModal(null)}
          topics={orgData && orgData.topics && orgData.topics.split('|')}
          tech={
            orgData && orgData.technologies && orgData.technologies.split('|')
          }
        />
      )}
    </div>
  );
};

export default OrganisationFinal;
