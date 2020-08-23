
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from '../scss/carousel.module.scss';
import sponsors from './sponsors.json';

export default function Carousel({data}) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeQuote, setActiveQuote] = useState(data[0]);
        // Previous Item Function

  function goToPrevious() {
    let newIndex;
    if (activeIndex === 0) {
      newIndex = data.length - 1;
    }
    else
    newIndex = activeIndex-1;
    setActiveIndex(newIndex);
    setActiveQuote(data[newIndex]);
  }
              // Next Item Function
  function goToNext() {
    let newIndex;
    if (activeIndex === data.length - 1) {
      newIndex = 0;
    } else newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
    setActiveQuote(data[newIndex]);
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  

  return (
    <div className={styles['carousel-outer']}>
      <h1 className={styles.heading}>Our Past <span>Sponsors</span> and <span>Partners</span> </h1>
      <div className={styles['sponsors-div']}>
        {sponsors.map((sponsor) => {
          // console.log(sponsor);
          return (
            <img
              key={sponsor.name}
              className={styles['partner-image']}
              src={sponsor.url}
              alt={sponsor.name}
              title={sponsor.name}
            />
          );
        })}
      </div>
      <div className={styles['carousel-container']}>
        <h1 className={styles.heading}>Testimonials</h1>
        <button
          type="button"
          onClick={goToPrevious}
          className={styles['left-button']}>
          <img src="SVG/left-arrow.svg" alt="Prev" />
        </button>

        <div className={styles['carousel-inner']}>
          <img
            src="SVG/opening-quote.svg"
            alt="Open Quote"
            style={{ position: 'absolute', top: '0', left: '0' }}
          />
          <div className={styles['carousel-data']}>
            <p>{activeQuote.comment}</p>

            <div className={styles['data-bottom-row']}>
              <img src={activeQuote.profileImage} alt="Profile" />
              <h2>{activeQuote.name}</h2>
              <h4> {activeQuote.Designation}</h4>
            </div>
          </div>
          <img
            src="SVG/closing-quote.svg"
            alt="Close Quote"
            style={{ position: 'absolute', right: '0', bottom: '5px' }}
          />
        </div>

        <button
          type="button"
          onClick={goToNext}
          className={styles['right-button']}>
          <img src="SVG/right-arrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
}


Carousel.defaultProps = {
  data: [
      {
        comment:
          'Comment by John Doe',
        profileImage: 'icons/young-man.png',
        name: 'John Doe',
        Designation: 'Software Engineer'
    }
  ]
};


Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    comment: PropTypes.string,
    profileImage: PropTypes.string,
    name: PropTypes.string,
    Designation:PropTypes.string
  }))
};