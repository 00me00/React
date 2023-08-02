import React, { useEffect, useState } from 'react'
import { Card } from '../component'
import { useFetch } from '../hooks/useFetch'

const MovieList = ({apiPath}) => {
  const {movies}=useFetch(apiPath)
  console.log("jki",movies)
//   const[movies,setMovies]=useState([])
//   console.log("hello")
//   useEffect(()=>{
//     async function fetchMovies(){
// const res=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=ac9398a53849628a45cc4135feb70a02")
// const data=await res.json()
// // console.log(data.results)
// setMovies(data.results)
//     }
//     fetchMovies()
//   },[])
  return (
   <main className='mx-auto'>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {
      movies && movies.map((m)=>(
          <Card key={m.id} movie={m}/>
        ))
      }
    
    </div>
   </main>
  )
}

export default MovieList