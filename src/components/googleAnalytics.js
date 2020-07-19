<<<<<<< HEAD
<<<<<<< HEAD
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-173001988-1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
=======
=======
>>>>>>> [Feat] Added google analytics
import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize("UA-173001988-1")
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
<<<<<<< HEAD
>>>>>>> [Feat] Added google analytics
=======
>>>>>>> [Feat] Added google analytics
