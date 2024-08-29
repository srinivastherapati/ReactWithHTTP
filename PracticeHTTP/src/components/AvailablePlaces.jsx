import { sortPlacesByDistance } from '../loc.js';
import ErrorPage from './ErrorPage.jsx';
import Places from './Places.jsx';

import { useState,useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFecting,setIsFetching]=useState(false);
const [availablePlaces,setAvailableplaces]=useState([]);
const [error,setError]=useState(false);

useEffect(()=>{
  
   async function fetchPlaces() {
    setIsFetching(true);
    try{
      const response=await fetch("http://localhost:3000/places");
      const result=await response.json();
      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlaces=sortPlacesByDistance(result.places,position.coords.latitude,position.coords.longitude);
        setAvailableplaces(sortedPlaces);
        setIsFetching(false);
      })
      if(!response.ok){
        throw new Error("An error occoured , Failed to fetch");
      }

    }
    catch(error){
      setError({message: error.message || "An error Occured"});
    }
    setIsFetching(false);
   }
   fetchPlaces();
 },[]);

 if(error){
   return <ErrorPage title="An error Occured" message={error.message} />
 }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFecting}
      loadingText="fetching the data ..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
