import { takeData } from './helper';
import axios from './user-api';

/* Menampilkan semua data yang ada di userboard */
export function getAll () {
  return axios.get('/userboard')
    .then(takeData);
}

export function get (userboard_id) {
  return axios.get(`/userboard/${userboard_id}`)
    .then(takeData);
}

export function create (payload) {
  return axios.post('/userboard', payload)
    .then(takeData);
}