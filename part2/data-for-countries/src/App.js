import React, { useState, useEffect } from 'react';
import Search from './Component/Search';
import Countries from './Component/Countries';
import axios from 'axios'
/**
 * @Description: App Component (Exercises 2.12-2.14 data for countries)
 * @author Shy
 * @date 2020/12/19 
*/

const App =()=> {
    /**
     * Initialize the data
     */
    // initial data about countries
    const [countries, setCountries] = useState([])
    
    // 'searchInsert' use for search input value
    // and search this value in countries
    const [searchInsert, setSearchInsert] = useState('')
    
    /**
     * using Effect hook to fetch data
     */
    useEffect(()=> {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res=> {
                setCountries(res.data)
            }
        )
        .catch(e=> console.log(e))
    }, [])
    /**
     * end of the data part
     */
    
    /**
     * Functions and algorithms part
     */
    // bond search input value to the variable 'searchInsert'
    const searchHandler = (e) => setSearchInsert(e.target.value)
    
    // assign an extra array the countries with searching words
    const searchedCountries = countries.filter(c=>c.name.includes(searchInsert))
    // {searchedCountries.length === 1?
    //     setShowCountry(true)
    //     :
    //     setShowCountries(false)}
    
    /**
     * End of
     * functions or algorithms part
     */
    
    return (
        <div style={{marginLeft:'15px'}}>
            <Search
                search={searchInsert}
                searchHandler={searchHandler}
            />
            <Countries
                srCountries={searchedCountries}
            />
        </div>
    )
    
}

/**
 * End of App Component
 */
export default App