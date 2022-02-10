import React,{useState} from 'react';
import Pagination from './Pagination.js'

function Favourites() {
  const [curGenre,setCurGenre]=useState('All Genres');
  return <>
  <div className='flex justify-center flex-wrap space-x-2 m-4'><button className='text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-blue-400'>All Genres</button>
  <button className='text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-gray-400 hover:bg-blue-400'>Action</button>
</div>
  <div className='text-center'>
  <input type='text' placeholder='Search' className='border border-2 text-center p-1 m-2'/>
  <input type='number' placeholder='Rows' className='border border-2 text-center p-1 m-2'/>

  </div>
  
 
  <div>Table Container</div>
  <div className='mt-4'>
<Pagination/>
    </div>
 </>
}

export default Favourites;
