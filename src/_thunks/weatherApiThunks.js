import axios from "axios";
import {WEATHER_API} from "../Const/CONSTANTS";
import {fetchWeatherDataSuccess} from "../_actions/weatherInfoActions";
import {newDataFetchSuccess} from "../_actions/commonActions";


export const getCityWeather = (cityId, time) => dispatch => {
    const CitySearchParam = 'id=' + cityId;
    //return axios.get(WEATHER_API.replace('{searchParams}',CitySearchParam));
    axios.get(WEATHER_API.replace('{searchParams}', CitySearchParam)).then(
        ({data}) => {
            dispatch(fetchWeatherDataSuccess(data));
            dispatch(newDataFetchSuccess(data.list, time));
        }).catch(
        (err) => {
            alert('Something went wrong')
        })
};