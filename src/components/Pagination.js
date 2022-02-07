import React,{useState} from 'react';

function Pagination({pageProp,goAhead,goBack}) {
  
  return (<>
  <div classname=" flex justify-center ">
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl" onClick={goBack}>Previous</button>
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300   ">{pageProp}</button>
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-xl border-l-0    " onClick={goAhead}>Next</button>
  </div>
  
  </>);
}

export default Pagination;
