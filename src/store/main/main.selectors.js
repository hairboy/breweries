import { createSelector } from "reselect";

const getId = (_, id) => id

export const getBreweries = (state) => state.main.breweries ?? []

export const getBreweryById = createSelector(getBreweries, getId, (breweries, id) => {
  const brewery = breweries?.find(brewery => brewery.id === +id)
  
  return brewery
  
})