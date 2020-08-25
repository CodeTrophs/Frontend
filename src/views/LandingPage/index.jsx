import React, { useEffect, useState, useContext } from 'react';

import AboutUs from '../../components/AboutUs';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Help from '../../components/Help';
import HowItWorks from '../../components/HowItworks';
import Spinner from '../../components/Spinner';
import UserContext from '../../context/UserContext';
import testimonials from '../../static/testimonialsData.json';
import Header from '../Header';
import Welcome from '../Welcome';

const LandingPage = () => {
  const [Loading, setLoading] = useState(true);
  const { User, setUser } = useContext(UserContext);

  useEffect(() => {
    if (User) {
      setUser(User);
    }
    setLoading(false);
  }, [User]);

  if (Loading) return <Spinner />;

  return (
    <>
      <Header />
      <Welcome setLoading={(e) => setLoading(e)} />
      <AboutUs />
      <Help />
      <HowItWorks />
      <Carousel data={testimonials} />
      <Footer />
    </>
  );
};

export default LandingPage;
