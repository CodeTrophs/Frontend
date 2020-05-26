import React from 'react';

import styles from '../../css/feed.module.scss';
import Card from '../FeedCard';
import FeedLang from './TopLang';
import FeedOrg from './TopOrg';
import FeedTag from './TopTags';
// import ProjectProfile from '../profile/projectProfile';


export default function FeedFinal() {
  return (
    <div>
      <div className={styles['disp-flex-bottom']}>
        <div>
          <FeedLang />
          <FeedOrg />
          <FeedTag />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
