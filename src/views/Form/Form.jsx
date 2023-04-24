import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries, postActivity } from "../../Redux/countryActions";
import style from './Form.module.css'
import inputValidations from "./inputValidations";
import { Link } from "react-router-dom";

function Form(){

    const dispatch=useDispatch();
    const countries=useSelector((state)=>state.countries)
    const allActivities=useSelector((state)=>state.activities)
    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    });
    const [error, setError] = useState({});

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[])

    const handleInput=(event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setActivity({...activity, [property]:value})
        setError(inputValidations({...activity, [property]:value}))
    };

    const handleSelect=(event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setActivity((localState)=>{
            if(property==='countries'){
                if(!activity.countries.includes(value)){
                    return{...localState, countries:[...localState.countries, value]}
                }else{
                    return {...localState, countries:[...localState.countries]}
                }
            }else{
                return {...localState, [property]:value}                
            }
        })
        setError(inputValidations({...activity, [property]:value}))
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!activity.name || !activity.difficulty || !activity.duration || !activity.season || activity.countries.length===0){
            return alert (' Please complete all fields before submitting')
        } 
        if(error && Object.keys(error).length > 0){
            return alert ('The form has an error.')
        }
        const exist=allActivities.find((act)=>act.name===activity.name)
        if(exist){
            return alert('The activity name you provided already exists')
        }
        dispatch(postActivity(activity))
        alert ('Activity created');
        setActivity({
            name: "",
            difficulty : "",
            duration:"",
            season : "",
            countries :[]
        })
    };

    const handleDelete = (event) => {
        setActivity({
            ...activity,
            countries : activity.countries.filter((country)=>country!==event)
        })
    };
    
    return(
        <div>
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>

                <div>
                    <label htmlFor="name">Activity name: </label>
                    <input type="text" name="name" value={activity.name} onChange={handleInput}className={style.select}/>
                    <p className={style.errorMessage}>{error.name}</p>
                </div>

                <div>
                    <label htmlFor="difficulty">Difficulty:  </label>
                    <> 1</>
                    <input type="range" name="difficulty" value={activity.difficulty} 
                    onChange={handleInput} step="1" min="1" max="5" className={style.range}/>
                    <>5  </>
                    <p className={style.errorMessage}>{error.difficulty}</p>
                </div>

                
                <div>
                    <label htmlFor="duration">Duration: </label>
                    <input type="number" name="duration" value={activity.duration}
                    onChange={handleInput}min="0"max="24"step="0.5"className={style.select}/>
                    <span> hs</span>
                    <p className={style.errorMessage}>{error.duration}</p>
                </div>
                

                <div>
                    <label htmlFor="season">Season: </label>
                    
                    <label>
                        <input type="radio"name="season"value="Summer"checked={activity.season === "Summer"}
                        onChange={handleSelect}className={style.checkbox}/>
                        Summer
                    </label>
                    <label>
                        <input type="radio"name="season"value="Winter"checked={activity.season === "Winter"}
                        onChange={handleSelect} className={style.checkbox}/>
                        Winter
                    </label>
                    <label>
                        <input type="radio"name="season"value="Autumn"checked={activity.season === "Autumn"}
                        onChange={handleSelect} className={style.checkbox}/>
                        Autumn
                    </label>
                    <label>
                        <input type="radio"name="season"value="Spring"checked={activity.season === "Spring"}
                        onChange={handleSelect} className={style.checkbox}/>
                        Spring
                    </label>
                    <p className={style.errorMessage}>{error.season}</p>
                </div>

                <div>
                    <label htmlFor="countries">Country: </label>
                    <select name="countries" value={activity.countries[activity.countries.length-1]} onChange={handleSelect}
                    className={style.select}>
                        <option value="" disabled selected>Select a country...</option>
                            {countries.sort((a, b) => a.name.localeCompare(b.name)).map((country) => (
                                <option value={country.name}>{country.name}</option>
                            ))}
                    </select>
                <p className={style.errorMessage}>{error.countries}</p>
                </div>

                <div className={style.buttonsDiv}>
                    <button type= "submit"className={style.button40}>Add</button>
                    <Link to='/home'><button className={style.button40}>Home</button></Link> 
                </div>  
            </form>
        </div>
           

            <div className={style.countryList}>
            {activity.countries.map((country)=>{
                return(
                    <div className={style.countries}>
                    <>{country}</>
                    <button className={style.cruz} onClick={()=>handleDelete(country)}>X</button>
                    </div>
            )})}
                </div>
        </div>
        

    )

}

export default Form;