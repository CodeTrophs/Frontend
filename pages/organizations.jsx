import React from 'react';

// import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import LandingContainer from '../src/components/LandingContainer';
import Organisation from '../src/components/Organisation';
import SearchBar from '../src/components/SearchBar';
import styles from '../src/scss/organisations.module.scss';
import Organisations from '../src/services/organisations.json';

const organizations = () => {
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
      {/* <AdDisplay /> */}
      <SearchBar page="organizations" />
      <div className={styles['organisations-grid']}>
        {Organisations.data.map((organisation) => (
          <Organisation
            className={styles.card}
            key={organisation.name + organisation.topics}
            org={organisation}
            tech={organisation.technologies.split('|')}
            topics={organisation.topics.split('|')}
          />
        ))}
      </div>
    </div>
  );
};

export default organizations;
