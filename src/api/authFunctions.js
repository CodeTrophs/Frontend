import jwt from 'jsonwebtoken';
import Router from 'next/router';

export function secureToken(token) {
  const newSecureToken = jwt.sign(
    token,
    process.env.NEXT_PUBLIC_SECURE_TOKEN_ACCESS_KEY
  );
  return newSecureToken;
}

export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  Router.replace('/');
}

export function verifySecuredToken(token) {
  return jwt.verify(
    token,
    process.env.NEXT_PUBLIC_SECURE_TOKEN_ACCESS_KEY,
    (err, userData) => {
      if (err) return null;
      return userData;
    }
  );
}
