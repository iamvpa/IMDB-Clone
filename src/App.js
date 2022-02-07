
import './App.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import Movies from './components/Movies.js'
import Pagination from './components/Pagination.js'
import Favourites from './components/Favourites.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (<BrowserRouter>
 
  <NavBar></NavBar>
  <Routes>
    <Route path="/" element={<><Banner></Banner><Movies></Movies></>}></Route>
    <Route path="/favourites" element={<Favourites></Favourites>}></Route>

  </Routes>
 
  </BrowserRouter>
    
  );
}

export default App;
