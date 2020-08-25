import React from 'react';

import styles from '../../scss/organisations.module.scss';
import OrganizationValues from '../../static/organizations';
import Header from '../../views/Header';
import Adsense from '../Adsense';
import LandingContainer from '../LandingContainer';
import Organization from '../Organization';
import SearchBar from '../SearchBar';

const OrganizationsView = () => {
  return (
    <div>
      <Header />
      <LandingContainer
        title="Organizations"
        line1="Find an organization to contribute to."
        line2="Cant find the organization you are searching for?"
        line3="Search below to narrow down your results."
        imgsrc="/SVG/organisation-imgsrc.png"
      />
      <Adsense />
      <SearchBar page="organizations" />
      <div className={styles['organisations-grid']}>
        {OrganizationValues.map((organization) => (
          <Organization
            className={styles.card}
            key={organization.id}
            org={organization}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationsView;
