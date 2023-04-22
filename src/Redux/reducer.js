import { CLEAN_DETAIL, GET_ACTIVITIES, GET_ACTIVITY_DETAIL, GET_COUNTIRES, GET_COUNTRY_NAME, GET_DETAIL, ADD_ACTIVITY, DELETE_ACTIVITY } from "./countryActions";
import {FILTER_BY_CONTINENT, SORT_BY_POPULATION, SORT_BY_ABC, FILTER_BY_ACTIVITY} from "./filterAction"

const initialState={
    countries:[],
    allCountries : [],
    CountryDetail:{},
    activities:[],
    allActivities:[],
    ActivityDetail:{}
}



function rootReducer(state=initialState, action){

    switch(action.type){
        case GET_COUNTIRES:
            return{...state, countries:action.payload, allCountries:action.payload};

        case GET_DETAIL:
            return{...state, CountryDetail:action.payload};

        case CLEAN_DETAIL:
            return{...state, CountryDetail:{} }

        case GET_COUNTRY_NAME:
            return{...state, countries:action.payload}

        case GET_ACTIVITIES:
            return{...state, activities:action.payload, allActivities:action.payload }

        case GET_ACTIVITY_DETAIL:
            return{...state, ActivityDetail:action.payload}

        case FILTER_BY_CONTINENT:
            const continentFilter=action.payload==='All'?
                state.allCountries:
                state.allCountries.filter((country)=>country.continent===action.payload)
            return{...state, countries:continentFilter}

        case FILTER_BY_ACTIVITY:
            const activityFilter=action.payload==='allAct'?
                state.allCountries.filter((country)=>country.activities&&country.activities.length>0):
                state.allCountries.filter((country)=>country.activities&&country.activities.find((act)=>act.name===action.payload))
            return{...state, countries:activityFilter}

        case SORT_BY_POPULATION:
            const populationSort=action.payload==='minPop'?
                [...state.countries].sort((a,b)=>a.population-b.population):    //hago un sort de una copia de mi estado
                [...state.countries].sort((a,b)=>b.population-a.population)    //y se lo paso ordenado a mi estado
            return{...state, countries:populationSort}
        
        case SORT_BY_ABC:
            const abcSort=action.payload==='asc'?
                [...state.countries].sort((a,b)=>a.name.localeCompare(b.name)): //localeCompare me devuelve un int dependiendo el resultado de comparar dos strings
                [...state.countries].sort((a,b)=>b.name.localeCompare(a.name))
            return{...state, countries:abcSort}
        
        case ADD_ACTIVITY:
            return{...state};

        case DELETE_ACTIVITY:
            const updatedActivities=state.activities.filter((activity)=>activity.id!==action.payload);
            return {...state,activities:updatedActivities};
            
        default: return {...state}
    }
}

export default rootReducer;