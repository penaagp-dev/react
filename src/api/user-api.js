import axios from 'axios';
import * as auth from '../lib/auth';
import { getAuthToken } from '../lib/auth';

var env = process.env.REACT_APP_ENVIRONMENT;
var host = process.env.REACT_APP_API_URL;
if ( env === "production" ){
  host = process.env.REACT_APP_API_URL_PROD;
}
const api_host = host+"/user/"


const axiosInstance = axios.create({
  // baseURL: 'https://api.adrini.com/user/'
  baseURL: api_host
});

axiosInstance.interceptors.request.use(((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers['Access-Token'] = token;
  }
  
  return config;
}));


axiosInstance.interceptors.response.use(((response) => {
  if (!response.data.status) return response;
  const isUnAuthenticated = response.data.message.includes('Invalid access token')
  
  if (isUnAuthenticated) {
    auth.removeToken();
    window.location.href = '/'
  }

  return response;
}));

export default axiosInstance;
