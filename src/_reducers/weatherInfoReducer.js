import {FETCH_WEATHER_DATA_SUCCESS} from "../_actions/weatherInfoActions";

const InitialState = {};

export function weatherReducer(state = InitialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
