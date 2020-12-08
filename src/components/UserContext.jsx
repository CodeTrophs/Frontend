import { createContext } from 'react';

const UserContext = createContext(null);
const ThemeContext = createContext('light');

export { UserContext, ThemeContext};
