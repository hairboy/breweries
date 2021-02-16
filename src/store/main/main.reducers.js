import { BREWERIES_REQUEST, BREWERIES_SUCCESS } from './main.actions'

const initialState = {
  breweries: [],
  isLoading: false,
  isError: false,
}

const handleBreweriesRequest = (state, action) => {
  return {
    ...state,
    isLoading: true,
  }
  
}

const handleBreweriesSuccess = (state, action) => {
  if(action.breweries) {
    return {
      ...state,
      breweries: action.breweries,
      isLoading: false,
    }
  }

  return state
}


export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case BREWERIES_REQUEST:
      return handleBreweriesRequest(state, action);
    case BREWERIES_SUCCESS:
      return handleBreweriesSuccess(state, action); 
    default:
       return state;
  }
}