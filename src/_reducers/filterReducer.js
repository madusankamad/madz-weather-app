import {
    CHANGE_ACTIVE_GRAPH,
    CHANGE_CITY_SUCCESS,
    CHANGE_DATE_SUCCESS,
    CHANGE_FORCAST_DATA_RANGE,
    CHANGE_WEATHER_TYPE_SUCCESS
} from "../_actions/filterActions";
import {getFormattedDate} from "../helpers/helperUtils";
import {CITY_DATA, FORCAST_DATA_RANGE, GRAPH_TYPES, UNIT_TYPES, WEATHER_TYPES} from "../Const/CONSTANTS";

const InitialState = {
    activeUnit: {
        tempUnit: UNIT_TYPES.temperature.defaultUnit,
        humiUnit: UNIT_TYPES.humidity.defaultUnit,
        windUnit: UNIT_TYPES.wind.defaultUnit
    },
    selectedDate: getFormattedDate((new Date()), 'YYYY-MM-DD h:m:s'),
    forcastDataRange: FORCAST_DATA_RANGE.allDays.value,
    selectedWeatherType: WEATHER_TYPES.default.value,
    selectedCityId: CITY_DATA[0].id,
    selectedGraphType: GRAPH_TYPES.TEMP.selector,
};

export function filterReducer(state = InitialState, action) {
    switch (action.type) {
        case CHANGE_DATE_SUCCESS :
            return {...state, selectedDate: action.payload};
        case CHANGE_WEATHER_TYPE_SUCCESS :
            return {...state, selectedWeatherType: action.payload};
        case CHANGE_CITY_SUCCESS :
            return {...state, selectedCityId: action.payload};
        case CHANGE_FORCAST_DATA_RANGE :
            return {...state, forcastDataRange: action.payload};
        case CHANGE_ACTIVE_GRAPH :
            return {...state, selectedGraphType: action.payload};
        default:
            return state;
    }
}