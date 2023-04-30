import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { getCountries } from "../../Redux/countryActions";
import { filterByActivity, filterByContinent, reloadFilters, sortByABC, sortByPopulation } from "../../Redux/filterAction";
import style from './Filters.module.css'
import { useState } from "react";

function Filters({paginado}){
    const dispatch=useDispatch();
    const activities=useSelector((state)=>state.allActivities);

    const[filters, setFilters] = useState({
        continent:"",
        population:"",
        name:"",
        activity:""
    })

    const[initialFilters, setInitialFilters] = useState({
        continent:"",
        population:"",
        name:"",
        activity:""
    })

    function handleReload(){
        paginado(1)
        setFilters(initialFilters)
        dispatch(reloadFilters())
        dispatch(getCountries())
    }

    function handleFilterContinent(event){
        paginado(1)
        setFilters({...filters, continent:event.target.value});
        dispatch(filterByContinent(event.target.value))
    }
    function handleSortPopulation(event){
        paginado(1)
        setFilters({...filters, population:event.target.value});
        dispatch(sortByPopulation(event.target.value))
    }
    function handleSortAbc(event){
        paginado(1)
        setFilters({...filters, name:event.target.value});
        dispatch(sortByABC(event.target.value))
    }
    function handleFilterActivity(event){
        paginado(1)
        setFilters({...filters, activity:event.target.value});
        dispatch(filterByActivity(event.target.value))
    }
    return(
        <div className={style.filterDiv}>

            <select className={style.select}onChange={(event)=>{handleSortAbc(event)}}value={filters.name}>
            <option value=""disabled selected hidden>ABC order</option>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>

            <select onChange={(event)=>{handleSortPopulation(event)}}className={style.select}value={filters.population}>
                <option value=""disabled selected hidden>Order by population</option>
                <option value='minPop'>Lower population</option>
                <option value='maxPop'>Higer population</option>
            </select>

            <select onChange={(event)=>{handleFilterContinent(event)}}className={style.select}value={filters.continent}>
                <option value=""disabled selected hidden>Select a continent</option>
                <option value='All'>All Countries</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Europe'>Europe</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>Africa</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
            </select>

            <select onChange={(event)=>{handleFilterActivity(event)}}className={style.select}value={filters.activity}>
            {activities.length===0?
            <option value='NoAct'>No hay actividades</option>:
            <>
            <option value=""disabled selected hidden>Select an activity</option>
            <option value='All'>All Activities</option>
            {activities.map((act)=>{
                return<option value={act.name} key={act.id}>{act.name}</option>
            })} </>}           
            </select>

            <button className={style.button40} onClick={()=>{handleReload()}}>Reload</button>

        </div>
    )

}

export default Filters;