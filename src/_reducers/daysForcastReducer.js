import {SET_FORCAST_ALL_DAYS_SUCCESS} from "../_actions/dayForcastActions";

const InitialState = [];

export function daysForcast(state = InitialState, action) {
    switch (action.type) {
        case SET_FORCAST_ALL_DAYS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}