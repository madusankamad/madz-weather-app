import {CHANGE_CITY_SUCCESS,CHANGE_DATE_SUCCESS,CHANGE_WEATHER_TYPE_SUCCESS} from '../_actions/filterActions';
import {getFormattedDate} from "../helpers/helperUtils";
import {CITY_DATA, WEATHER_TYPES} from "../Const/CONSTANTS";

const InitialState = {
    activeUnit:'',
    selectedDate:getFormattedDate((new Date()),'YYYY-MM-DD h:m:s'),
    activeGraph:'',
    selectedWeatherType:WEATHER_TYPES.default.value,
    selectedCityId: CITY_DATA[0].id
};

export function filterReducer(state = InitialState, action) {
    switch (action.type) {
        case CHANGE_DATE_SUCCESS :
            return {...state, selectedDate: action.payload};
        case CHANGE_WEATHER_TYPE_SUCCESS :
            return {...state, selectedWeatherType: action.payload};
        case CHANGE_CITY_SUCCESS :
            return {...state, selectedCityId: action.payload};
        default:
            return state;
    }
}