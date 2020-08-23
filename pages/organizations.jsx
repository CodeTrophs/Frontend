import React from 'react';

import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import LandingContainer from '../src/components/LandingContainer';
import Organisation from '../src/components/Organisation';
import SearchBar from '../src/components/SearchBar';
import styles from '../src/scss/organisations.module.scss';

const organizations = () => {
  const Organisations = [
    {
      organisation: 'Adobe',
      id: 1,
      link: 'alizahir.github.io',
      orgDescription:
        'Description of organisation. Random texts coming here and there. Lets enter something to fill these spaces. This is just a sample of the text that  something to fill these spaces. This is just a sample of the text that  something to fill these spaces. This is just a sample of the text that  something to fill these spaces. This is just a sample of the text that  something to fill these spaces. This is just a sample of the text that is to be entered into the boxes.',
      langTags: ['React', 'Javascript'],
      topicTags: ['Topic 1', 'Topic 2'],
      github: 'http://www.github.com',
      slack: 'https://www.slack.com',
      bgurl: '/SVG/org-bg1.png'
    },
    {
      organisation: 'Facebook',
      id: 2,
      link: 'nandana.github.io',

      orgDescription:
        'Description of organisation. Random texts coming here and there. Lets enter something to fill these spaces. This is just a sample of the text that is to be entered into the boxes.',
      langTags: ['React', 'Javascript'],
      topicTags: ['Topic 1', 'Topic 2'],
      github: 'http://www.github.com',
      slack: 'https://www.slack.com',
      bgurl: '/SVG/org-bg1.png'
    },
    {
      organisation: 'Mozilla',
      id: 3,
      link: 'arya.github.io',

      orgDescription:
        'Description of organisation. Random texts coming here and there. Lets enter something to fill these spaces. This is just a sample of the text that is to be entered into the boxes.',
      langTags: ['React', 'Javascript'],
      topicTags: ['Topic 1', 'Topic 2'],
      github: 'http://www.github.com',
      slack: 'https://www.slack.com',
      bgurl: '/SVG/org-bg1.png'
    }
  ];

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
      <AdDisplay />
      <SearchBar page="organizations" />
      <div className={styles['organisations-grid']}>
        {Organisations.map((organisation) => (
          <Organisation
            className={styles.card}
            key={organisation.id}
            org={organisation}
          />
        ))}
      </div>
    </div>
  );
};

export default organizations;
