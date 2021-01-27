import React, { useContext } from 'react';

import style from '../scss/themebtn.module.scss';
import ThemeContext from './ThemeContext';

const Button = () => {
  const { Theme, setTheme } = useContext(ThemeContext);
  const value = Theme === 'dark' ? `${Theme} 🌙` : `${Theme} 🌞`;

  function onClick() {
    if (Theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <button
      id="theme-toggler"
      className={style.themeButton}
      onClick={onClick}
      type="button">
      {value}
    </button>
  );
};

export default Button;
