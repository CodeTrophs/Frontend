import React, {useContext} from 'react';

import UserContext from "./UserContext";

const Button = () => {
  const { Theme, setTheme } = useContext(UserContext);

  function onClick() {
    if (Theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return <button onClick={onClick} type="button">Change Theme</button>;
};

export default Button;
