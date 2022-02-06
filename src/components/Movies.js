import React,{useState,useEffect} from 'react'
import Image from '../banner.jpg'
import axios from 'axios'
import {Grid} from 'react-loader-spinner'
function Movies() {
    const [movies,setMovies]=useState([])
    useEffect(function(){
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=7602f6a7075922c7cdd8b2b2537c49ca&page=2").then((res)=>{setMovies(res.data.results)})
    })
   
    return (
        <>
            <div className="mb-8">
                <div className="mt-8 mb-8 text-2xl font-bold text-center">Trending Movies</div>
                {
                    movies.length==0?<div className="flex justify-center"><Grid
                    heigth="100"
                    width="100"
                    color='grey'
                    ariaLabel='loading'
                  /></div>:
                
                <div className="flex flex-wrap justify-center">
                    {
                        movies.map((movie)=>(

                            <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
             
                            <div className="w-full bg-gray-900 text-white  py-2 text-center rounded-b-xl opacity-70 ">{movie.title}</div>
                            </div>

                        ))
                    }
               
             
                </div>
}
                </div>
            
        </>
    )
}

export default Movies
