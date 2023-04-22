import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { getCountries } from "../../Redux/countryActions";
import { filterByActivity, filterByContinent, sortByABC, sortByPopulation } from "../../Redux/filterAction";
import style from './Filters.module.css'

function Filters({paginado}){
    const dispatch=useDispatch();
    const activities=useSelector((state)=>state.allActivities);

    function handleReload(){
        paginado(1)
        dispatch(getCountries())
    }

    function handleFilterContinent(event){
        paginado(1)
        dispatch(filterByContinent(event.target.value))
    }
    function handleSortPopulation(event){
        paginado(1)
        dispatch(sortByPopulation(event.target.value))
    }
    function handleSortAbc(event){
        paginado(1)
        dispatch(sortByABC(event.target.value))
    }
    function handleFilterActivity(event){
        paginado(1)
        dispatch(filterByActivity(event.target.value))
    }
    return(
        <div className={style.filterDiv}>

            <select className={style.select}onChange={(event)=>{handleSortAbc(event)}}>
            <option value=""disabled selected hidden>ABC order</option>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>

            <select onChange={(event)=>{handleSortPopulation(event)}}className={style.select}>
                <option value=""disabled selected hidden>Order by population</option>
                <option value='minPop'>Lower population</option>
                <option value='maxPop'>Higer population</option>
            </select>

            <select onChange={(event)=>{handleFilterContinent(event)}}className={style.select}>
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

            <select onChange={(event)=>{handleFilterActivity(event)}}className={style.select}>
            {activities.length===0?
            <option value='NoAct'>No hay actividades</option>:
            <>
            <option value=""disabled selected hidden>Select an activity</option>
            <option value='allAct'>All Activities</option>
            {activities.map((act)=>{
                return<option value={act.name} key={act.id}>{act.name}</option>
            })} </>}           
            </select>

            <button className={style.button40} onClick={()=>{handleReload()}}>Reload</button>

        </div>
    )

}

export default Filters;