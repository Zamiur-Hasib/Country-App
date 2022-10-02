import React from 'react'
import '../Styling/Country.css'

const Country = (props) => {
  const {flags, name, capital, area, population, independent, landlock} = props.country

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name)
  }

  return (
    <article className='article-container'>
      <div className="flag-div">
        <img src={flags.png} alt={name.common} className='flag' />
      </div>
      
      <div className="info-div">
        <div className='informations'>
          <h3>Name</h3>
          <p> {name.common}</p>
        </div>
        <div className='informations'>
          <h3>Capital</h3>
          <p>{capital}</p>
        </div>
        <div className='informations'>
          <h3>Area</h3>
          <p>{area}</p>
        </div>
        <div className='informations'>
          <h3>Population</h3>
          <p>{population}</p>
        </div>
        <div className='informations'>
          <h3>Independent</h3>
          <p>{independent ? 'Yes':'No'}</p>
        </div>
        <div className='informations'>
          <h3>Landlock</h3>
          <p>{landlock ? 'Yes': 'No'}</p>
        </div>
      </div>
      <button className="btn" onClick={()=>{
        handleRemoveCountry(name.common)
      }} >Remove Country</button>
    </article>
  )
}

export default Country