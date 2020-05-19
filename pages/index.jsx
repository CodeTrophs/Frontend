import React from 'react';

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import AboutUs from '../src/components/Home/AboutUs';
import HowContainer from '../src/components/Home/HowContainer';
import LandingContainer from '../src/components/Home/LandingContainer';
import WelcomeComponent from '../src/components/Home/WelcomeComponent';

function Home() {
  return (
    <div className="Home">
      <Header />
      <WelcomeComponent />
      <LandingContainer />
      <AboutUs />
      <HowContainer />
      <Footer />
    </div>
  );
}

export default Home;
