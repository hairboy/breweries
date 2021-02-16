import styled from 'styled-components'

import phone from './img/phone.svg'
import web from './img/chrome.svg'
import title from './img/toast.svg'

export const Container = styled.div`
  background-color: salmon;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ListBrewery = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 5px;
  margin: 40px;
  background-color: #87CEFA;
  color: #f62dfa;
  font-weight: bold;
`

export const Phone = styled.svg`
  background-image: url(${phone});
  background-repeat: no-repeat;
  height: 30px;
  width: 30px;
`

export const Web = styled.svg`
  background-image: url(${web});
  background-repeat: no-repeat;
  height: 30px;
  width: 30px;
`

export const Title = styled.svg`
  background-image: url(${title});
  background-repeat: no-repeat;
  height: 30px;
  width: 30px;
`
