import {CalculateForcastInformation} from "../selectors/dataSelectors";
import {setGraphTempDataSuccess} from "./graphActions";
import {setMainForcastDataSuccess} from "./mainForcastActions";
import {setForcastAllDaysSuccess} from "./dayForcastActions";

export const newDataFetchSuccess= (newData,time) => dispatch => {

    //Filter the Data For Selected Date.
    const CalculatedInfo = CalculateForcastInformation(newData, time);


    //Fill the data for temprature Graph
    dispatch(setGraphTempDataSuccess(CalculatedInfo.temperatureGraph));

    //Fill The data For Main Forcast
    dispatch(setMainForcastDataSuccess(CalculatedInfo.mainForcast));

    //Fill The data For Days Forcast
    dispatch(setForcastAllDaysSuccess(CalculatedInfo.daysForcast));
};
