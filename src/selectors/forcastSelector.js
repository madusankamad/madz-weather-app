import _ from 'lodash';
import {WEATHER_ICON} from '../config/config';

export const getForcastDataByTime = (forcastData, timeSelected) => {

    const selectedInfo =(_.filter(forcastData.list, {'dt_txt': timeSelected}))[0];

    return {
        city: forcastData.city.name,
        date: timeSelected,
        temperature: selectedInfo.main.temp,
        weather: selectedInfo.weather[0].description,
        icon: WEATHER_ICON.replace('{icon-id}',selectedInfo.weather[0].icon),
        SelectedforcastInfo: selectedInfo
    };


};

export const getDateList = (forcastData) => {
    const allDates = [];
    forcastData.list.map((list) => allDates.push(list.dt_txt));
    return allDates;

};