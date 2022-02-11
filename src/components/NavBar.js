import React from 'react'
import logo from '../movieslogo.png'
import {Link} from 'react-router-dom'
function navbar() {
    return (
        <>
        <div className="border px-8 flex space-x-8 items-center">
          <img src={logo} width="60" height="60">
          </img>
          <Link to="/" className="text-black-400 font-bold text-xl md:text-2xl">Movies</Link>
          <Link to="/favourites" className="text-black-400 font-bold text-xl md:text-2xl">Favourites</Link>
          </div>
        </>
    )
}

export default navbar
