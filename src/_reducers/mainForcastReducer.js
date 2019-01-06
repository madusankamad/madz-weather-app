import {SET_MAIN_FORCAST_DATA_SUCCESS} from "../_actions/mainForcastActions";

const InitialState = {
    dataLoaded: false,
};

export function mainForcastReducer(state = InitialState, action) {
    switch (action.type) {
        case SET_MAIN_FORCAST_DATA_SUCCESS:
            return {...action.payload, dataLoaded: true}
        default:
            return state;
    }
}