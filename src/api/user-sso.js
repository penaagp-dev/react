import axios from './usersso-api';
import { takeData } from './helper';

/**
 * Get all board data.
 * @return {Promise<any>}
 */

export function get() {
    return axios.get(`/list/`)
      .then(takeData);
}

export function update (payload) {
  return axios.put('/update', payload)
    .then(takeData);
}


