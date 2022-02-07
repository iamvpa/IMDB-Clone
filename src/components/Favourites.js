import React from 'react';

function Favourites() {
  return <>
  <div className='flex justify-center flex-wrap space-x-2 m-4'><button className='text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-blue-400'>Genres Button</button>
  <button className='text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-gray-400 hover:bg-blue-400'>Genres Button</button>
  <button className='text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-gray-400 hover:bg-blue-400'>Genres Button</button>
  <button className='text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-gray-400 hover:bg-blue-400'>Genres Button</button></div>
  <div>Inputs Container</div>
  <div>Table Container</div>
  <div>Pagination</div>
  </>;
}

export default Favourites;
