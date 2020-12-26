import React, { Component } from 'react';
import ShowSingleCountry from "./ShowSingleCountry";
import ShowCountries from "./ShowCountries";

/**
 * Countries Component
 */
class Countries extends Component {
    render () {
        // fetch filtered countries Array
        const countries = this.props.srCountries
        // console.log(countries.length)
        return (
            <div>
                {
                    // decide to show countries or country
                    countries.length <= 10 && countries.length > 0 ?
                        countries.length === 1 ?
                            //show only one country details
                            <div>
                                {/* display the details of one country*/}
                                <ShowSingleCountry country={countries}/>
                            </div>
                            :
                            // show the countries' name and button to show more
                            countries.map((c, i) =>
                                <div key={i}>
                                    <ShowCountries countries={c}/>
                                </div>
                            )
                        :
                        // decide to show words when less than 1 or more than 10
                        countries.length === 0 ?
                            <div>
                                <p>No country</p>
                            </div>
                            :
                            <p>Too many matches, specify another filter</p>
                }
            </div>
        )
    }
}

/**
 * End of Countries Component
 */
export default Countries