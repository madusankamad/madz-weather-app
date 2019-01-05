import {SET_GRAPH_TEMP_DATA_SUCCESS,SET_GRAPH_FULL_TEMP_DATA_SUCCESS,SET_ALL_GRAPH_DATA} from '../_actions/graphActions';
import {convertTemp} from '../helpers/helperUtils';
import {GRAPH_STRUCTURE} from '../Const/CONSTANTS';

const InitialState = {...GRAPH_STRUCTURE};

export function graphReducer(state = InitialState, action) {
    switch (action.type) {
        case SET_GRAPH_TEMP_DATA_SUCCESS:
            return {...state , temperatureGraph:{...state.temperatureGraph, oneDay:action.payload} };
        case SET_GRAPH_FULL_TEMP_DATA_SUCCESS:
            return {...state , temperatureGraph:{...state.temperatureGraph, allDays:action.payload}};
        case SET_ALL_GRAPH_DATA:
            return action.payload;
        default:
            return state;
    }
}

const changeTempUnit = (graphData,unit)=>{
    return graphData.map(data=>({...data, temperature: convertTemp(data.tempK,unit)}));
};