import Cookies from 'js-cookie'

export function getToken(tokenKey) {
  Cookies.get(tokenKey);
}

export function setToken(tokenKey, token) {
  Cookies.set(tokenKey, token);
}

export function removeToken(tokenKey) {
  Cookies.remove(tokenKey);
}
