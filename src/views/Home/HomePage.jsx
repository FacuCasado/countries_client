import React from "react";
import { useState, useEffect } from "react";
import Country from "../../components/Country/Country";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries } from "../../Redux/countryActions";
import style from './HomePage.module.css'
import loading from '../../xutils/avionmundo.gif'
import Paginado from "../../components/Paginado/Paginado";
import Filters from "../../components/Filters/Filters";

function HomePage({paginado, countriesPerPage, currentPage, currentCountries}){

    const dispatch=useDispatch();
    const allCountries= useSelector((state)=>state.countries) //trae todos los paises del estado global

    // //*--------Paginado--------
    // const [currentPage, setCurrentPage]=useState(1);//pagina actual
    // const [countriesPerPage, setCountriesPerPage]=useState(10);//paises por pagina
    // const indexOfLastCountry = currentPage*countriesPerPage;//indice del ultimo pais de la pag
    // const indexOfFirstCountry = indexOfLastCountry-countriesPerPage;//indice del primer pais de la pag
    // const currentCountries=allCountries.slice(indexOfFirstCountry,indexOfLastCountry)//saco los paises a mostrar por pagina
    
    useEffect(()=>{ //Cuando se monta el componente despacha getCountries que lleva todos los paises al estado global
        dispatch(getCountries())
        dispatch(getActivities())
    },[])


    


    return(
        <div className={style.homeDiv}>

            <div className={style.filterCards}>

                    <div className={style.filters}>
                        <Filters paginado={paginado}/>
                    </div>

                    <div className={style.countries}>
                        {currentCountries.length ? ( 
                            currentCountries.map(({id,name,continent,flag}) =>{
                                return (
                                        <Country 
                                            key ={id}
                                            id ={id}
                                            name = {name}
                                            flag ={flag}
                                            continent = {continent}/>
                                )
                            })
                        ) : (
                            <img className={style.loading} src={loading} alt='Imagen no disponible'/>
                        )}
                    </div>   
            </div>
             
            <div>
                <Paginado
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginado={paginado}
                currentPage={currentPage}/>  
            </div>
                
                       
        </div>
    )
}

export default HomePage;