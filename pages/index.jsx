import React, { useEffect, useState } from 'react';

import Spinner from '../src/components/Spinner';
import LandingPage from '../src/views/LandingPage';

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div className="Home">
      <LandingPage />
    </div>
  );
}

export default Home;
