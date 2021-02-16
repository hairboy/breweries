import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { SearcInput } from './styled/SearchInput'
import { ShowBreweriesButton } from './styled/ShowBreweriesButton'

export const Control = () => {
  const [search, setSearch] = useState('')

  
  return(
    <div>
      <SearcInput type='text' placeholder='search breweries' value={search} onChange={event => setSearch(event.target.value)}/>
    </div>)
}