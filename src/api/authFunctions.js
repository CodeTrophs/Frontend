import jwt from 'jsonwebtoken';
import Router from 'next/router';

import config from '../config';

export function secureToken(token) {
  const newSecureToken = jwt.sign(token, config.TOKEN_ACCESS_KEY);
  return newSecureToken;
}

export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  Router.replace('/');
}

export function verifySecuredToken(token) {
  return jwt.verify(token, config.TOKEN_ACCESS_KEY, (err, userData) => {
    if (err) return null;
    return userData;
  });
}
