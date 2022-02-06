import React,{useState} from 'react';

function Pagination() {
   const [page,setPage]=useState(1);
   function goAhead(){
       setPage(page+1);
   }
   function goBack(){
       if(page>1)
       setPage(page-1);
   }
  return (<>
  <div classname="w-full flex justify-center">\
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl" onClick={goBack}>Previous</button>
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300">{page}</button>
  <button className="p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-xl border-l-0" onClick={goAhead}>Next</button>
  </div>
  
  </>);
}

export default Pagination;
