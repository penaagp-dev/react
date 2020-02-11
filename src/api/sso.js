import axios from 'axios';
import { takeData } from './helper';

var env = process.env.REACT_APP_ENVIRONMENT;
var host = process.env.REACT_APP_SSO_URL;;
if ( env === "production" ){
  host = process.env.REACT_APP_SSO_URL_PROD;
}

const SSO_URL = host;
const url = path => `${SSO_URL}${path}`;

/**
 * @param {object} payload 
 * @param {string} payload.username 
 * @param {string} payload.password
 */
export function login (payload) {
  return axios.post(url('/auth/login'), payload)
    .then(takeData);
}


export function userInsert (payload) {
  return axios.post(url('/user/add'), payload)
    .then(takeData);
}

export function userInsertLogin (payload) {
  return axios.post(url('/auth/add'), payload)
    .then(takeData);
}
