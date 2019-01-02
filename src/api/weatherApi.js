import axios from 'axios';
import {WEATHER_API} from '../config/config';

export const getWeatherInfoByCityId = (cityId='524901') => {
    const CitySearchParam = 'id='+cityId;
    return axios.get(WEATHER_API.replace('{searchParams}',CitySearchParam));
};