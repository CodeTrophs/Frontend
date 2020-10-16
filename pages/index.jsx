import React, { useEffect, useState } from 'react';

import {Carousel, Footer,Header, AboutUs, HelpUs, HowContainer, WelcomeComponent, Spinner, Subscribe} from '../src/components';
import testimonials from '../src/components/testimonialsData.json';

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
