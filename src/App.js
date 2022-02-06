
import './App.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import Movies from './components/Movies.js'
import Pagination from './components/Pagination.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (<BrowserRouter>
 
  <NavBar></NavBar>
  <Routes>
    <Route to="/" element={<Banner></Banner>}></Route>


  </Routes>
 
  </BrowserRouter>
    
  );
}

export default App;
