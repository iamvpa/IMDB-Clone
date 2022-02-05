import React from 'react'
import logo from '../movieslogo.png'
function navbar() {
    return (
        <>
          <img src={logo}>
          </img>
          <div>Movies</div>
          <div>Favourites</div>
        </>
    )
}

export default navbar
