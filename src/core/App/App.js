import React, {useEffect} from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import { Header } from '../../components/Header/Header'
import { ListBreweries } from '../../components/ListBreweries/ListBreweries'
import { Brewery } from '../../components/ListBreweries/Brewery/Brewery'
import { Nav } from './App.styled'
import { useSelector, useDispatch } from 'react-redux'
import { breweriesRequest } from '../../store/main/main.actions'

export const App = () => {
  const dispatch = useDispatch()
  const getBreweries = () => dispatch(breweriesRequest())

  const isLoading   = useSelector(state => state.main.isLoading)

  useEffect( () => {
    getBreweries()
  }, [])

  if(isLoading) {
    return <></>
  }


  return (
    <div>
      <div>
      <nav> 
        <Nav to='/'> 
          <Header /> 
        </Nav>
      </nav>
      </div>
        <Switch>
          <Route path='/' exact component={ListBreweries} />
          <Route path='/brewery/:id' component={Brewery} />
      </Switch>
    </div>
  );
}


