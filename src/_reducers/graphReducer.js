import {
    SET_ALL_GRAPH_DATA,
    SET_GRAPH_FULL_TEMP_DATA_SUCCESS,
    SET_GRAPH_TEMP_DATA_SUCCESS
} from "../_actions/graphActions";
import {GRAPH_STRUCTURE} from "../Const/CONSTANTS";

const InitialState = {...GRAPH_STRUCTURE};

export function graphReducer(state = InitialState, action) {
    switch (action.type) {
        case SET_GRAPH_TEMP_DATA_SUCCESS:
            return {...state, temperatureGraph: {...state.temperatureGraph, oneDay: action.payload}};
        case SET_GRAPH_FULL_TEMP_DATA_SUCCESS:
            return {...state, temperatureGraph: {...state.temperatureGraph, allDays: action.payload}};
        case SET_ALL_GRAPH_DATA:
            return action.payload;
        default:
            return state;
    }
}
