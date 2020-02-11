import axios from './user-api';
import { takeData } from './helper';

/**
 * Get all board data.
 * @return {Promise<any>}
 */
export function getAll () {
  return axios.get('/channels')
    .then(takeData);
}

export function get (channels_id) {
  return axios.get(`/channels/${channels_id}`)
    .then(takeData);
}

export function updateKeys (channels_id) {
  return axios.get(`/channels/${channels_id}/keys`)
    .then(takeData);
}

export function create (payload) {
  return axios.post('/channels', payload)
    .then(takeData);
}

export function remove (channels_id) {
  return axios.delete(`/channels/${channels_id}`)
    .then(takeData);
}

export function update (channels_id, payload) {
  return axios.put(`/channels/${channels_id}`, payload)
    .then(takeData);
}