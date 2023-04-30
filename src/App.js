import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom'
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/Home/HomePage'
import Nav from './components/Nav/Nav'
import Detail from './views/Detail/Detail'
import ActDetail from './views/ActDetail/ActDetail';
import Form from './views/Form/Form';
import Activities from './views/Activities/Activities';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
axios.defaults.baseURL='http://localhost:3001/'


function App() {
  const location = useLocation();
  const allCountries=useSelector((state)=>state.countries)

  //*--------Paginado--------
  const [currentPage, setCurrentPage]=useState(1);//pagina actual
  const [countriesPerPage, setCountriesPerPage]=useState(10);//paises por pagina
  const indexOfLastCountry = currentPage*countriesPerPage;//indice del ultimo pais de la pag
  const indexOfFirstCountry = indexOfLastCountry-countriesPerPage;//indice del primer pais de la pag
  const currentCountries=allCountries.slice(indexOfFirstCountry,indexOfLastCountry)//saco los paises a mostrar por pagina
  const paginado=(pageNumber)=>{ //funcion que establece la pagina actual
    setCurrentPage(pageNumber)
}


  return (
    <div className="App">

      <div>
        {location.pathname !== '/'&&<Nav paginado={paginado}/>}
      </div>
      
      
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage paginado={paginado} countriesPerPage={countriesPerPage}currentPage={currentPage}currentCountries={currentCountries}/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}></Route>
        <Route path="/activities/:actName" element={<ActDetail/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/activities" element={<Activities/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
