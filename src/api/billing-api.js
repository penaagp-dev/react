import axios from 'axios';
import { takeData } from './helper';


const env = process.env.REACT_APP_ENVIRONMENT
const host = process.env.REACT_APP_BILLING_URL
if ( env=="production" ){
  host = process.env.REACT_APP_BILLING_URL_PROD
}
const bill_host = host+"/api"
const BILLING_URL_LOCAL = bill_host;
const url = path => `${BILLING_URL_LOCAL}${path}`;



export function clientList () {
  return axios.get(url('/client/list'))
    .then(takeData);
}

export function clientGet (client_id) {
  return axios.get(url(`/client/list/${client_id}`))
    .then(takeData);
}

/**
 * @param {object} payload
 * @param {string} payload.name
 * @param {string} payload.vat
 * @param {string} payload.id_number
 * @param {string} payload.address1
 * @param {string} payload.address2
 * @param {string} payload.city
 * @param {string} payload.state
 * @param {string} payload.postal_code
 * @param {string} payload.email
 * @param {string} payload.country_id
 * @param {string} payload.work_phone
 * @param {string} payload.first_name
 * @param {string} payload.last_name
 */
export function clientCreate (payload) {
  return axios.post(url('/client/create'), payload)
    .then(takeData);
}

export function invoiceList () {
  return axios.get(url('/invoice/list'))
    .then(takeData);
}

export function invoiceGet (inv_id) {
  return axios.get(url(`/invoice/list/${inv_id}`))
    .then(takeData);
}

/**
 * @param {object} payload
 * @param {string} payload.client_id
 * @param {string} payload.is_recurring | default false
 * @param {string} payload.tax_rate1 | default 10
 * @param {string} payload.tax_name1 | PPH 10
 * @param {string} payload.is_amount_discount | default false
 * @param {string} payload.service_type | GET SERVICE TYPE
 * @param {string} payload.product_id | GET PRODUCT ID
 */
export function invoiceCreate (payload) {
  return axios.post(url('/invoice/create'), payload)
    .then(takeData);
}

export function productList () {
  return axios.get(url('/product/list'))
    .then(takeData);
}

export function productGet (product_id) {
  return axios.get(url(`/product/list/${product_id}`))
    .then(takeData);
}

/**
 * @param {object} payload
 * @param {string} payload.cliinvoice_ident_id
 * @param {string} payload.amount
 */
export function paymentCreate (payload) {
  return axios.post(url('/payment/create'), payload)
    .then(takeData);
}

export function paymentList () {
  return axios.get(url('/payment/list'))
    .then(takeData);
}

export function paymentGet (product_id) {
  return axios.get(url(`/payment/list/${product_id}`))
    .then(takeData);
}

