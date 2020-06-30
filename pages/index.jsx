import React, { useEffect, useState } from 'react';

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import AboutUs from '../src/components/Home/AboutUs';
import HowContainer from '../src/components/Home/HowContainer';
import WelcomeComponent from '../src/components/Home/WelcomeComponent';
import Spinner from '../src/components/Spinner';

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (<div><Header /><Spinner /></div>)
  }
  return (
    <div className="Home">
      <Header />
      <WelcomeComponent setLoading = {(e)=>setLoading(e)} />
      <AboutUs />
      <HowContainer />
      <Footer />
    </div>
  );
}

export default Home;
