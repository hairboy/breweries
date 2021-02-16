import React from 'react'

import { Phone, Title, Web } from '../ListBreweries.styled'
import { getBreweryById } from '../../../store/main/main.selectors'
import { useSelector } from 'react-redux'

export const Brewery = ({ match }) => {

  const brewery = useSelector(state => getBreweryById(state, match?.params?.id || 0))
  console.log(match)
  return(
    <>{brewery && 
    <div><p><Title />{brewery.name}</p>
    <a href={brewery.website_url} > <Web /> </a>
    <p> {brewery.state}, {brewery.city} </p>
    <a href={`tel: ${brewery.phone}`} > <Phone /> </a></div>
}</>)
}