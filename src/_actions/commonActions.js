import {CalculateForcastInformation} from "../selectors/dataSelectors";
import {setAllGraphData} from "./graphActions";
import {setMainForcastDataSuccess} from "./mainForcastActions";
import {setForcastAllDaysSuccess} from "./dayForcastActions";


export const newDataFetchSuccess = (newData, time) => dispatch => {

    //Filter the Data For Selected Date.
    const CalculatedInfo = CalculateForcastInformation(newData, time);
    const oneDayGraphs = CalculatedInfo.oneDayGraphs;
    const allDayGraphs = CalculatedInfo.allDayGraphs;

    const newGraphData = {
        temperatureGraph: {
            oneDay: oneDayGraphs.temperatureGraph,
            allDays: allDayGraphs.temperatureGraph
        },
        windGraph: {
            oneDay: oneDayGraphs.windGraph,
            allDays: allDayGraphs.windGraph
        },
        humidityGraph: {
            oneDay: oneDayGraphs.humidityGraph,
            allDays: allDayGraphs.humidityGraph
        }
    };

    dispatch(setAllGraphData(newGraphData));
    //Fill the data for temprature Graph
    //dispatch(setGraphTempDataSuccess(CalculatedInfo.oneDayGraphs.temperatureGraph));
    //dispatch(setGraphFullTempDataSuccess(CalculatedInfo.allDayGraphs.temperatureGraph));

    //Fill The data For Main Forcast
    dispatch(setMainForcastDataSuccess(CalculatedInfo.mainForcast));

    //Fill The data For Days Forcast
    dispatch(setForcastAllDaysSuccess(CalculatedInfo.daysForcast));
};
