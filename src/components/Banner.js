import React ,{useState,useEffect} from 'react'
import axios from 'axios'
function Banner() {
    const [movie,setMovie]=useState({})
    var a=Math.floor(Math.random()*20)
    useEffect(function(){
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=7602f6a7075922c7cdd8b2b2537c49ca&page=1").then((res)=>{setMovie(res.data.results[a])})
    },[])

    return (
        <>
         <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[60vh] bg-center bg-cover flex items-end`}>
             
             <div className="text-3xl text-white p-4 bg-gray-900 bg-opacity-50 w-full flex justify-center">{movie.title}</div>
             </div>   
             
        </>
    )
}

export default Banner
