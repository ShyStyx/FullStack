import React, { useState } from 'react';
import ShowSingleCountry from "./ShowSingleCountry";

/**
 * ShowCountries Component
 */
const ShowCountries = (props) =>  {
    const {name} = props.countries
    const [ handleClick, setHandleClick] =useState(false)
    return (
        <div>
            <p>{name}<button onClick={()=>setHandleClick(!handleClick)}>{handleClick?'off':'show'}</button></p>
            {handleClick?
                <div>
                    <ShowSingleCountry country={props.countries}/>
                </div>
                :
                <div></div>
            }
        </div>
    )
    
}

/**
 * End of ShowCountries Component
 */
export default ShowCountries