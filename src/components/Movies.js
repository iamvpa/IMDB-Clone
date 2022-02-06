import React from 'react'
import Image from '../banner.jpg'
import axios from 'axios'
function Movies() {
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=7602f6a7075922c7cdd8b2b2537c49ca&page=2").then((res)=>console.table(res.data.results))
    return (
        <>
            <div className="mb-8">
                <div className="mt-8 mb-8 text-2xl font-bold text-center">Trending Movies</div>
                <div className="flex flex-wrap justify-center">
                <div className={`bg-[url(${Image})] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
             
             <div className="w-full bg-grey-500 text-white py-2 text-center rounded-b-xl">Title</div>
             </div>
             <div className={`bg-[url(${Image})] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
             
             <div className="w-full bg-grey-500 text-white py-2 text-center rounded-b-xl">Title</div>
             </div>
             <div className={`bg-[url(${Image})] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
             
             <div className="w-full bg-grey-500 text-white py-2 text-center rounded-b-xl">Title</div>
             </div>
             <div className={`bg-[url(${Image})] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
             
             <div className="w-full bg-grey-500 text-white py-2 text-center rounded-b-xl">Title</div>
             </div>
                </div>
                   
                </div>
            
        </>
    )
}

export default Movies
