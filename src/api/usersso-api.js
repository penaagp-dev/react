import axios from 'axios';
import { getAuthToken } from '../lib/auth';



const host = process.env.REACT_APP_SSO_URL
const sso_host = host+"/user/"

const axiosInstance = axios.create({
  baseURL: sso_host
});

axiosInstance.interceptors.request.use(((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers['Access-Token'] = token;
  }
  return config;
}));

export default axiosInstance;
