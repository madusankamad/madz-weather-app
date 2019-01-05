import {CalculateForcastInformation} from "../selectors/dataSelectors";
import {setGraphTempDataSuccess,setGraphFullTempDataSuccess} from "./graphActions";
import {setMainForcastDataSuccess} from "./mainForcastActions";
import {setForcastAllDaysSuccess} from "./dayForcastActions";

export const newDataFetchSuccess= (newData,time) => dispatch => {

    //Filter the Data For Selected Date.
    const CalculatedInfo = CalculateForcastInformation(newData, time);


    //Fill the data for temprature Graph
    dispatch(setGraphTempDataSuccess(CalculatedInfo.temperatureGraph));
    dispatch(setGraphFullTempDataSuccess(CalculatedInfo.fullGraph.temperatureGraph));

    //Fill The data For Main Forcast
    dispatch(setMainForcastDataSuccess(CalculatedInfo.mainForcast));

    //Fill The data For Days Forcast
    dispatch(setForcastAllDaysSuccess(CalculatedInfo.daysForcast));
};
