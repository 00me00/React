import React from 'react'
import logo from '../assets/images.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const quaryTerm=e.target.search.value;
   // console.log(quaryTerm)
   e.target.reset()
   return navigate(`/search?q=${quaryTerm}`)
  }
  return (
    <header>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">
        <img src={logo} style={{height:"50px"}} alt='logo'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie/popular">Popular Movie</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie/top">Top Rated</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie/upcoming">Upcoming</NavLink>
        </li>
       
    
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="text" name='search' placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </header>
  
  )
}

export default Header