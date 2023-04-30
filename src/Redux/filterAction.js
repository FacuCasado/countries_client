export const FILTER_BY_CONTINENT="FILTER_BY_CONTINENT"
export const FILTER_BY_ACTIVITY="FILTER_BY_ACTIVITY"
export const SORT_BY_POPULATION="SORT_BY_POPULATION"
export const SORT_BY_ABC="SORT_BY_ABC"
export const RELOAD_FILTERS="RELOAD_FILTERS"

export function filterByContinent(payload){
    return({
        type:FILTER_BY_CONTINENT,
        payload
    })
}

export function filterByActivity(payload){
    return({
        type:FILTER_BY_ACTIVITY,
        payload
    })
}

export function sortByPopulation(payload){
    return({
        type:SORT_BY_POPULATION,
        payload
    })
}

export function sortByABC(payload){
    return({
        type:SORT_BY_ABC,
        payload
    })
}

export function reloadFilters(){
    return({
        type:RELOAD_FILTERS
    })
}