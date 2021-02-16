import axios from 'axios'

export const perPage = 10

export const API_URL = `https://api.openbrewerydb.org/breweries?per_page=${perPage}`

export const API = axios.create({
  baseURL: API_URL,
})