import axios from 'axios';

export const GET_COUNTIRES="GET_COUNTIRES"
export const GET_DETAIL="GET_DETAIL"
export const CLEAN_DETAIL="CLEAN_DETAIL"
export const GET_ACTIVITIES="GET_ACTIVITIES"
export const GET_ACTIVITY_DETAIL="GET_ACTIVITY_DETAIL"
export const GET_COUNTRY_NAME="GET_COUNTRY_NAME"
export const ADD_ACTIVITY="ADD_ACTIVITY"
export const DELETE_ACTIVITY="DELETE_ACTIVITY"
export const PUT_ACTIVITY="PUT_ACTIVITY"



export function getCountries(){
    return async function(dispatch){
        try {
            let countries=await axios.get('/countries');
            return dispatch({
                type:GET_COUNTIRES,
                payload:countries.data
            })
        } catch (error) {
            return {error: error.message}
        }
        
    }
}


export function getDetail(id){
    return async function(dispatch){
        try {
            let countryDetail=await axios.get(`/countries/${id}`)
            return dispatch({
                type:GET_DETAIL,
                payload:countryDetail.data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}


export function cleanDetail(){
    return function(dispatch){
        return dispatch({
            type: CLEAN_DETAIL,
        })
    }
}

export function getCountryByName(name){
    return async function(dispatch){
        try {
            let countryName=await axios.get(`/countries/name?name=${name}`)
            return dispatch({
                type:GET_COUNTRY_NAME,
                payload:countryName.data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}

export function getActivities(){
    return async function(dispatch){
        try {
            let activities=await axios.get('/activities')
            return dispatch({
                type:GET_ACTIVITIES,
                payload:activities.data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}


export function getActivityDetail(name){
    return async function(dispatch){
        try {
            let activityDetail=await axios.get(`/activities/${name}`)
            return dispatch({
                type:GET_ACTIVITY_DETAIL,
                payload:activityDetail.data[0]
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}


export const postActivity =(payload) => {
    const activity= {
        name:payload.name,
        dificulty:payload.difficulty,
        duration:payload.duration,
        season:payload.season,
        country:payload.countries
    };
    return async function(dispatch){
        try {
            await axios.post('/activities', activity)
            return dispatch({
                type:ADD_ACTIVITY,
            })
        } catch (error) {
            return {error: error.message}
        }
    }
};

export const deleteActivity=(id)=>{
    return async function(dispatch){
        try {
           await axios.delete(`/activities/${id}`)
           return dispatch({
            type:DELETE_ACTIVITY,
            payload:id
           })
        } catch (error) {
            return {error: error.message}
        }
    }
    
}

export const putActivity=(payload)=>{
    const activity= {
        id:payload.id,
        name:payload.name,
        dificulty:payload.difficulty,
        duration:payload.duration,
        season:payload.season,
        country:payload.countries
    };
    return async function(dispatch){
        try {
            await axios.put('/activities', activity)
            return dispatch({
                type:PUT_ACTIVITY,
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}