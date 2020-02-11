import { takeData } from './helper';
import axios from './user-api';

/* Menampilkan semua data yang ada di userboard */
export function getAll () {
  return axios.get('/service')
    .then(takeData);
}

export function get (serviceId) {
  return axios.get(`/widget/${serviceId}`)
    .then(takeData);
}