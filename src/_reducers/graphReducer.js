import {SET_GRAPH_TEMP_DATA_SUCCESS,CHANGE_TEMP_UNIT,SET_GRAPH_FULL_TEMP_DATA_SUCCESS} from '../_actions/graphActions';
import {convertTemp} from '../helpers/helperUtils';

const InitialState = {
    temperatureGraph:[],
    windGraph:[],
    preassureGraph:[]
};

export function graphReducer(state = InitialState, action) {
    switch (action.type) {
        case SET_GRAPH_TEMP_DATA_SUCCESS:
            return {...state , temperatureGraph: action.payload};
        case SET_GRAPH_FULL_TEMP_DATA_SUCCESS:
            return {...state , temperatureGraphFull: action.payload};
        case CHANGE_TEMP_UNIT:
            return {...state , temperatureGraph: changeTempUnit(state.temperatureGraph,action.payload)};
        default:
            return state;
    }
}

const changeTempUnit = (graphData,unit)=>{
    return graphData.map(data=>({...data, temperature: convertTemp(data.tempK,unit)}));
};