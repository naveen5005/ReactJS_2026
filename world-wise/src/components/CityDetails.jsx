import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CityDetails = () => {
    const [city,setCity] = useState({});
    const params =useParams();

    useEffect(()=>{
        fetch("http://localhost:3001/cities/"+params.id).then((res)=>res.json()).then((data)=>{
            setCity(data);
        })
    },[])
  return (
    <div>
        <h1>Welcome to the {city.name}</h1>
        <p>{city.country}</p>
        <p>{city.description}</p>
        <p>{city.rating}</p>
    </div>
  )
}
