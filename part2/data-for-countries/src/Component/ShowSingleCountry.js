import React, { Component } from 'react';
import Weather from './Weather'

/**
 * ShowSingleCountry Component
 */
class ShowSingleCountry extends Component {
    render () {
        /**
         * Data creating and handling
         */
        const country = this.props.country
        
        // after mapping from father showCountries
        // country is an Object in Array
        // filtered single country is an Array
        let {name, capital, population, languages, flag} = country
        Array.isArray(country) ?
            {name, capital, population, languages, flag} = country[0]
        :
            {name, capital, population, languages, flag} = country
        
        // show languages
        const language = languages.map((l, i)=>(
            <li key={i}>{l.name}</li>
        ))
        
        /**
         * End of data processing
         */
        
        return (
            <div>
                <div>
                    <h3>{name}</h3>
                </div>
                <div>
                    <p>capital {capital}</p>
                    <p>population {population}</p>
                </div>
                <div>
                    <h3>Language</h3>
                    <ul>{language}</ul>
                </div>
                <div>
                    <img style={{width:'150px', height:'100px'}} src={flag} alt="flag"/>
                </div>
                <Weather capital={capital}/>
            </div>
        )
    }
}

/**
 * End of ShowSingleCountry Component
 */
export default ShowSingleCountry