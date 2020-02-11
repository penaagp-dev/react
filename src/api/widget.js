import axios from './user-api';
import { takeData } from './helper';

/**
 * Get all board data.
 * @param {object} payload
 * @param {string} payload.nm_widget
 * @param {string} payload.id_channels
 * @return {Promise<any>}
 */
export function create (payload) {
  return axios.post('/widget', payload)
    .then(takeData);
}

export function getAll () {
  return axios.get('/widget')
    .then(takeData);
}

export function getByChannels (id_channels) {
  return axios.get(`/widget/channels/${id_channels}`)
    .then(takeData);
}

export function get (widgetId) {
  return axios.get(`/widget/${widgetId}`)
    .then(takeData);
}

export function remove (widgetId) {
  return axios.delete(`/widget/${widgetId}`)
    .then(takeData);
}

/**
 * @param  {string} widgetId
 * @param  {object} payload 
 * @return {string} payload.nm_widget
 */
export function update (widgetId, payload) {
  return axios.put(`/widget/${widgetId}`, payload)
    .then(takeData);
}