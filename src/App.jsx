import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Countries from './Components/Countries'
import Search from './Components/search'

import './Styling/App.css'

const App = () => {

  const url = 'https://restcountries.com/v3.1/all'
  const [countries, setCountries] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [error, setError] = useState(null)
  const [filteredCountry, setFilteredCountry] = useState(countries)
  
  const fetchData = async (url) =>{
    setIsloading(true)
    try {
      const resp = await axios (url)
      setIsloading(false)
      setCountries(resp.data)
      setFilteredCountry(resp.data)
      setError(null)
    } catch (err) {
      setIsloading(false)
      setError(err)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [])
  
  const handleRemoveCountry = (name) =>{
    const filter = filteredCountry.filter((country)=>
      country.name.common !== name)
      setFilteredCountry(filter)
  }

  const handleSearch = (searchValue) =>{
    let value = searchValue.toLowerCase()
    const newCountry = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase()
      return countryName.startsWith(value)
    })
    setFilteredCountry(newCountry)
  }

  return (
    <main>
      
      <div className="heading">
        <h1>Country App</h1>
        <Search onSearch = {handleSearch}/>
        {isLoading && <h2>Loading...</h2>}
        {error && <h3>{error.message}</h3>}
      </div>

      <div className='body'>
        <Countries countries={filteredCountry} onRemoveCountry={handleRemoveCountry}/>
      </div>
     
    </main>
  )
}

export default App