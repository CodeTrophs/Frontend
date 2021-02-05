import ReactGA from 'react-ga';

import config from '../config';

export const initGA = () => {
  console.log(config.ANALYTICS_ID);
  ReactGA.initialize(config.ANALYTICS_ID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
