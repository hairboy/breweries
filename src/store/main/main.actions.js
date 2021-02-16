export const BREWERIES_REQUEST = 'BREWERIES_REQUEST'
export const BREWERIES_SUCCESS = 'BREWERIES_SUCCESS'
export const BREWERIES_ERROR = 'BREWERIES_ERROR'

export const breweriesRequest = () => ({
  type: BREWERIES_REQUEST,
})

export const breweriesSuccess = (breweries) => ({
  type: BREWERIES_SUCCESS,
  breweries,
})

export const breweriesError = (error) => ({
  type: BREWERIES_ERROR,
  error,
})