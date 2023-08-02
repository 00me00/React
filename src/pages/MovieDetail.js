import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const params=useParams()
  const[data,setData]=useState({})
  useEffect(()=>{
    async function fetchMovies(){
      const res=await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ac9398a53849628a45cc4135feb70a02`)
      const json=await res.json()
      console.log(json)
      setData(json)
    }
    fetchMovies()
  },[params.id])
  const image=`https://image.tmdb.org/t/p/w500/${data.poster_path}`
 // console.log (params.id)
  return (
    <>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="img col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="img"/>
    </div>
    <div className="container_poster_wrapper col-md-8 ">
      <section className='container poster'>
      <div className="card-body">
        <h1 className="card-title">{data.original_title}</h1>
        <h4 className="card-text">{data.status}</h4>
        <h5 className="card-text">Geners {data.genres && data.genres.map((o)=> <p className='btn btn-outline-dark m-1 '>{o.name}</p>)}</h5>
        <div><p className="card-text">{data.overview}</p></div>
        <h5 className="card-text">Original Language={data.original_language && data.original_language.toUpperCase()}</h5>
      </div>
      </section>
    </div>
  </div>
</div>
    </>
  )
}

export default MovieDetail