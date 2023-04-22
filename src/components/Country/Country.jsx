import React from "react";
import style from './Country.module.css'
import { Link} from "react-router-dom";

function Country({id, name, flag, continent}){

    return(
        
            <div className={style.countyDiv}>
                <div className={style.leftDiv}>
                    <h2 className={style.name}>{name}</h2>            
                    <h3 className={style.name}>{continent}</h3> 
                    <Link to={`/detail/${id}`} >
                    <button className={style.info}>+info</button>  
                    </Link>
                </div>
                <div className={style.rightDiv}>
                    <img className={style.flag} src={flag} alt='Imagen no disponible'/>
                </div>
                
            </div>
        
    )

}

export default Country;