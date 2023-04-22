import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import { cleanDetail, getDetail } from "../../Redux/countryActions";
import style from './Detail.module.css'
import { Link } from "react-router-dom";

function Detail(){

    const { detailId }=useParams();
    const dispatch=useDispatch();
    const country=useSelector((state)=>state.CountryDetail)

    useEffect(()=>{
        dispatch(getDetail(detailId))
        return ()=>{
            dispatch(cleanDetail())
        }
    },[detailId])
    return(
        <div className={style.detailDiv}>
                {!country.name && 
                <div className={style.loader}>
                    <span className={style.loaderText}>loading</span>
                    <span className={style.load}></span>
                </div>
                }

          {country.name &&
          <div style={{backgroundImage: `url(${country.flag})`}} className={style.flagDiv}>
            <div className={style.textDiv}>
              <div>
                  <h2 className={style.name}>{country.name}</h2>
                  <ul className={style.list}>
                    <li>Continent: {country.continent}</li>
                    <li>Capital: {country.capital?country.capital:"No tiene capital"}</li>
                    <li>Subregion: {country.subregion?country.subregion:"No tiene subregion"}</li>
                    <li>Area: {country.area}  m²</li>
                    <li>Population: {country.population} humans?</li>
                  {country.activities.length?
                        <li>Activities: {
                            country.activities.map((act, index)=>{
                            const actName=act.name
                            return(<><Link 
                                className={style.link}
                                key={act.name} to={{
                                pathname: `/activities/${actName}`,
                                search: `?detailId=${detailId}`
                            }}>{act.name}</Link>
                            {index<country.activities.length- 1 && ' '}</>)
                        })}</li>:
                        <></>}
                  </ul>
                  
              </div>
                <Link to={`/home`} >
                    <button className={style.button40}>Home</button>
                </Link>
           </div>
          </div>
          }
        </div> 
        
    )

}

export default Detail