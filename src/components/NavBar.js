import React from 'react'
import logo from '../movieslogo.png'
function navbar() {
    return (
        <>
        <div className="border px-8 flex space-x-8 items-center">
          <img src={logo} width="60" height="60">
          </img>
          <div className="text-black-400 font-bold text-xl md:text-2xl">Movies</div>
          <div className="text-black-400 font-bold text-xl md:text-2xl">Favourites</div>
          </div>
        </>
    )
}

export default navbar
