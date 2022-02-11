import React,{useState} from 'react';
import Pagination from './Pagination.js'

function Favourites() {
  const [curGenre,setCurGenre]=useState('All Genres');
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ]
  
  return <>
  <div className='flex justify-center flex-wrap space-x-2 m-4'><button className={curGenre=='All Genres'?'text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-blue-400':'text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-gray-400 hover:bg-blue-400'}>All Genres</button>
  <button className={curGenre=='Action'?'text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-blue-400':'text-xl p-1 bg-blue-400 text-white rounded-xl font-bold bg-gray-400 hover:bg-blue-400'}>Action</button>
</div>
  <div className='text-center'>
  <input type='text' placeholder='Search' className='border border-2 text-center p-1 m-2'/>
  <input type='number' placeholder='Rows' className='border border-2 text-center p-1 m-2'/>

  </div>
  
 
  <div> <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'><img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" className='mr-2 cursor-pointer'/> Rating<img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" className='mr-2 ml-2'/></div>
                   
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Popularity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                  Remove
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                                        {
                                            filterarr.map((movieObj)=>(
                                                <tr>
                                                    <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} style={{width:'5rem'}}/> {movieObj.original_title}</td>
                                                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                                                    <td>{movieObj.popularity}</td>
                                                    <td>{movieObj.vote_average}</td>
                                                    <td><button type="button" class="btn btn-danger" onClick={()=>this.handleDelete(movieObj.id)}>Delete</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
            </table>
          </div>
        </div>
      </div>
    </div></div>
  <div className='mt-4'>
<Pagination/>
    </div>
 </>
}

export default Favourites;
