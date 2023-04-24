import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity, getActivities } from "../../Redux/countryActions";
import { Link } from "react-router-dom";
import style from './Activities.module.css'

function Activities(){
    const dispatch=useDispatch();
    const allActivities=useSelector((state)=>state.activities)

    useEffect(()=>{
        dispatch(getActivities())
    },[])
    function handleDelete(id){
        dispatch(deleteActivity(id))
        alert("Activity deleted")
    }
    return(
        <div>
            <div className={style.actDiv}>
                {allActivities.map((activity) => (
                    <div className={style.countyDiv}>
                    <button className={style.cruz}onClick={()=>handleDelete(activity.id)}><div ></div>
                        <div ></div><div ></div></button>
                    <h5>{activity.name}</h5>
                    <Link className={style.link}to={`/activities/${activity.name}`}>Detail</Link>
                    </div>
                ))}  
            </div>
            
            <Link to='/home'>
            <button className={style.button40}>Home</button>
            </Link>
        </div>
            
    )
}

export default Activities;