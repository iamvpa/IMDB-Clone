import React from 'react';

function Pagination() {
  return (<>
  <div classname="w-full flex justify-center">\
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl">Previous</button>
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300">1</button>
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-xl border-l-0">Next</button>
  </div>
  
  </>);
}

export default Pagination;
