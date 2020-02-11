import axios from './user-api';
import { takeData } from './helper';

/**
 * Get all board data.
 * @return {Promise<any>}
 */
export function getAll () {
  return axios.get('/board')
    .then(takeData);
}

export function create (payload) {
  return axios.post('/board', payload)
    .then(takeData);
}

export function remove (id_board) {
  return axios.delete(`/board/${id_board}`)
    .then(takeData);
}