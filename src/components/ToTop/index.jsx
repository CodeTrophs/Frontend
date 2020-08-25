import React, { useState, useEffect, createRef } from 'react';

import styles from '../../scss/toTop.module.scss';

const ToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const top = createRef();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div onScroll={checkScrollTop} className={styles.container}>
      <button
        ref={top}
        type="button"
        onClick={scrollTop}
        style={{ display: showScroll ? 'block' : 'none' }}>
        Top
      </button>
    </div>
  );
};

export default ToTop;
