import React, { useEffect, useState, useContext } from 'react';

import {
  Carousel,
  Footer,
  // Header,
  AboutUs,
  HelpUs,
  HowContainer,
  WelcomeComponent,
  Spinner,
  Subscribe
} from '../src/components';
import testimonials from '../src/components/testimonialsData.json';
import ThemeContext from '../src/components/ThemeContext';

function Home() {
  const { Theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        {/* <Header /> */}
        <img
        className='header-logo'
        src="/logo/new_codetrophs_logo.svg"
        alt="logo"
      />
        <Spinner />
      </div>
    );
  }
  return (
    <div className={`Home ${Theme}`}>
      {/* <Header /> */}
      <img
        className='header-logo'
        src="/logo/new_codetrophs_logo.svg"
        alt="logo"
      />
      <WelcomeComponent setLoading={(e) => setLoading(e)} />
      <AboutUs />
      <HowContainer />
      <HelpUs />
      <Carousel data={testimonials} />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
