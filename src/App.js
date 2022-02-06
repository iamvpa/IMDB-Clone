
import './App.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import Movies from './components/Movies.js'
import Pagination from './components/Pagination.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (<>
 
  <NavBar></NavBar>
  <Banner></Banner>
  <Movies></Movies>
  <Pagination></Pagination>
  </>
    
  );
}

export default App;
