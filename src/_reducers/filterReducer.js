import {CHANGE_CITY_SUCCESS,CHANGE_DATE_SUCCESS} from '../_actions/filterActions';

const InitialState = {
    activeUnit:'',
    activeDate:'',
    activeGraph:'',
    weatherType:''
};

export function filterReducer(state = InitialState, action) {
    switch (action.type) {
        case CHANGE_DATE_SUCCESS :
            return {...state, activeDate: action.payload};
        default:
            return state;
    }
}