export const SET_GRAPH_TEMP_DATA_SUCCESS = 'SET_GRAPH_TEMP_DATA_SUCCESS';
export function setGraphTempDataSuccess(payload) {
    return {type: SET_GRAPH_TEMP_DATA_SUCCESS, payload: payload}
}

export const SET_GRAPH_FULL_TEMP_DATA_SUCCESS = 'SET_GRAPH_FULL_TEMP_DATA_SUCCESS';
export function setGraphFullTempDataSuccess(payload) {
    return {type: SET_GRAPH_FULL_TEMP_DATA_SUCCESS, payload: payload}
}
export const CHANGE_TEMP_UNIT = 'CHANGE_TEMP_UNIT';
export function changeTempGraphUnit(payload) {
    return {type: CHANGE_TEMP_UNIT, payload: payload}
}

export const SET_ALL_GRAPH_DATA = 'SET_ALL_GRAPH_DATA';
export function setAllGraphData(payload) {
    return {type: SET_ALL_GRAPH_DATA, payload: payload}
}

