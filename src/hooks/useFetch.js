import React, { useEffect, useState } from 'react'
// https://api.themoviedb.org/3/discover/movie?api_key=ac9398a53849628a45cc4135feb70a02
export const useFetch = (apiPath,quaryTerm="") => {
  // console.log(apiPath,quaryTerm)
    const[movies,setMovies]=useState([])
   const url=` https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${quaryTerm}`
console.log(url)
  useEffect(()=>{
    async function fetchMovies(){
const res=await fetch(url)
const data=await res.json()
setMovies(data.results)
    }
    fetchMovies()
  },[url])
  return {movies}
  
}
