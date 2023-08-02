import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({movie}) => {
  //console.log(movie)
  const {id,original_title,overview,poster_path}=movie
  const image=`https://image.tmdb.org/t/p/w500/${poster_path}`
  return (
    <div className="col">
      <Link className='costom' to={`/movie/${id}`}>
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{original_title}</h5>
        <p className="card-text">{overview}</p>
      </div>
    </div>
    </Link>
  </div>
  )
}

export default Card