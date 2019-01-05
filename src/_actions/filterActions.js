export const CHANGE_CITY_SUCCESS = 'CHANGE_CITY_SUCCESS';

export function changeCitySuccess(payload){
    return{type:CHANGE_CITY_SUCCESS, payload: payload}
}

export const CHANGE_DATE_SUCCESS = 'CHANGE_DATE_SUCCESS';

export function changeDateSuccess(payload){
    return{type:CHANGE_DATE_SUCCESS, payload: payload}
}

export const CHANGE_WEATHER_TYPE_SUCCESS = 'CHANGE_WEATHER_TYPE_SUCCESS';

export function changeWeatherTypeSuccess(payload){
    return{type:CHANGE_WEATHER_TYPE_SUCCESS, payload: payload}
}

export const CHANGE_FORCAST_DATA_RANGE = 'CHANGE_FORCAST_DATA_RANGE';

export function changeForcastDataRange(payload){
    return{type:CHANGE_FORCAST_DATA_RANGE, payload: payload}
}

export const CHANGE_ACTIVE_GRAPH = 'CHANGE_ACTIVE_GRAPH';
export function changeActiveGraph(payload){
    return{type:CHANGE_ACTIVE_GRAPH, payload: payload}
}

