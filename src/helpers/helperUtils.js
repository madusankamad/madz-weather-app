import {TempUnits} from '../Const/CONSTANTS';
import convert from 'convert-units';
import moment from 'moment';
import {WEATHER_ICON} from '../Const/CONSTANTS';


export const convertTemp = (value,toUnit)=>{
    return Math.floor(convert(value).from(TempUnits.general).to(toUnit));
};

export const getHourFromDate = (date)=>{
    return moment(date).format("hh a");
};

export const getDayFromDate = (date)=>{
    return moment(date).format("L");
};

export const getIconUrl = (icon)=> {
    return WEATHER_ICON.replace('{icon-id}',icon);
};

export const getDayNameFromDate = (date)=>{
    return moment(date).format("ddd");
};