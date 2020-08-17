import React from 'react';

import styles from '../scss/linearLoader.module.scss';

const LinearLoader = () => {
  return (
    <div className={styles.bounce}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
  );
};

export default LinearLoader;
