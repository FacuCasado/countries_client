import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getCountryByName } from "../../Redux/countryActions";
import style from './SearchBar.module.css'

function SearchBar(){
    const dispatch=useDispatch();
    const [name, setName]=useState("");

    function handleInputChange(event){
        setName(event.target.value)
    }
    function handleButton(event){
        dispatch(getCountryByName(name))
    }

    return(
        <div className={style.barDiv}>
         <input type='search' placeholder="Where..." onChange={handleInputChange} className={style.input}/>
         <button onClick={handleButton} className={style.button33}>Travel</button>
      </div>
    )
}

export default SearchBar;