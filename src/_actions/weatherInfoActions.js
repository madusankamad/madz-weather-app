export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export function fetchWeatherDataSuccess(payload) {
    console.log('fetchWeatherDataSuccess', payload);
    return {type: FETCH_WEATHER_DATA_SUCCESS, payload: payload}
}