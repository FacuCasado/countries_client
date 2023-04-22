import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"

function Nav(){
    return(
       <div className={style.navDiv}>
            <SearchBar/>

            <Link to='/activities'>
            <button className={style.button33}>Activities</button>
            </Link>

            <Link to='/form'>
            <button className={style.button33}>Create activity</button>
            </Link>

            <Link to='/'>
            <button className={style.button332}>Logout</button> 
            </Link>
       </div>
    )
}

export default Nav;