
import './App.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import Movies from './components/Movies.js'
import Pagination from './components/Pagination.js'
import Favourites from './components/Favourites.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Particles from "react-tsparticles"

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (<BrowserRouter>
 
  <NavBar></NavBar>
  <Routes>
    <Route path="/" className="background-red" element={<><Banner></Banner><Movies></Movies></>}></Route>
    <Route path="/favourites" element={<><Favourites></Favourites></>}></Route>

  </Routes>
 
  </BrowserRouter>
    
  );
}

export default App;
