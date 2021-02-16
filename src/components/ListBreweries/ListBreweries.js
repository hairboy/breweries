import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, ListBrewery, Phone, Title, Ul, Web, } from './ListBreweries.styled'
import { Control } from '../Control/Control'

export const ListBreweries = () => {
  
  const history = useHistory()


  const breweries = useSelector(state => state.main.breweries)

  return(
    <Container>
      <Control />
      <Ul>
      {
        breweries.map(brewery => {
          return(
              <ListBrewery key={brewery.id} onClick={() => history.push(`/brewery/${brewery.id}`)}>
                <p><Title />{brewery.name}</p>
                <a href={brewery.website_url} > <Web /> </a>
                <p> {brewery.state}, {brewery.city} </p>
                <a href={`tel: ${brewery.phone}`} > <Phone /> </a>
              </ListBrewery>
          )
        })
      }
      </Ul>
    </Container>
  )
}