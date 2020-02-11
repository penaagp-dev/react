export const AUTH_TOKEN_KEY = 'auth_token';

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function hasToken() {
  return Boolean(getAuthToken());
}

export function removeToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}