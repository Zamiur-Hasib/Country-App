import React from 'react'
import { useState, useEffect } from 'react'
import '../Styling/Search.css'

const Search = (props) => {

  const [searchText, setSearchText] = useState('')
  const handleChange = (e) =>{
    setSearchText(e.target.value)
  }

  useEffect(() => {
    props.onSearch(searchText)
  }, [searchText])
  

  return (
    <div className='search'>
    <input 
    type="text" 
    name="search" 
    id="search" 
    placeholder='Search Country' 
    value={searchText} 
    onChange={handleChange} />
    </div>
  )
}

export default Search