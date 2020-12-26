import React, { useEffect, useState } from 'react';
import axios from "axios";

/**
 * Weather Component
 */
const Weather =(props)=>{
    const city = props.capital
    const url = 'https://api.weatherapi.com/v1/current.json'
    const params = {
        key: process.env.REACT_APP_WEATHEKEY,
        q: city
    }
    const [weather, setWeather] = useState([
        {"current": {
            "condition":{
                "icon":""
                }
            }
        }
    ])
    /**
     * fetch weather information
     */
    useEffect(() => {
        axios
        .get(url, {params})
        .then(res => {
            setWeather([res.data])
        }).catch((e)=>console.log(e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    // This useEffect is for test by using json-server
    // useEffect(() => {
    //     axios
    //     .get('http://localhost:3001/weather')
    //     .then(res => {
    //         // console.log([res.data])
    //     }).catch((e)=>console.log(e))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    const {current} = weather[0]
    /*console.log(weather)*/
    /**
     * end of fetching data
     */
    return (
        
        <div>
            <h3>Weather in {city}</h3>
            <p><strong>Temperature</strong>: {current.temp_c} ℃</p>
            <p><strong>wind</strong>: {current.wind_kph} kph, direction {current.wind_dir}</p>
            <img src={current.condition.icon} alt={current.condition.text}/>
        </div>
    )
}

/**
 * End of Weather Component
 */
export default Weather