import _ from 'lodash';
import {convertTemp, getHourFromDate, getDayFromDate,getIconUrl} from '../helpers/helperUtils';
import {WEATHER_ICON} from "../Const/CONSTANTS";
import moment from "moment";

export const CalculateForcastInformation = (dataList, time)=>{
    //console.log('Processing Functions',time,dataList);
    const filteredListByDay = (_.filter(dataList, (list) => getDayFromDate(list.dt_txt) === getDayFromDate(time)));
    const filteredListByHour =  (_.filter(filteredListByDay, (list) => getHourFromDate(list.dt_txt) === getHourFromDate(time)));
    const averagedListItem = filteredListByDay[Math.floor(filteredListByDay.length/2)];

    const dataListForMainForcast = (filteredListByHour && filteredListByHour.length>0) ? filteredListByHour[0] : averagedListItem;

    //console.log('Processing Items=>',filteredListByDay,filteredListByHour,averagedListItem,dataListForMainForcast)

    //Get the processed data for graphs
    const graphs = processDataForGraphs(filteredListByDay);
    const graphsAllDays = processDataForGraphs(dataList);
    const mainForcast = mainForcastDataMapper(dataListForMainForcast);
    const daysForcast = ForcastDaysProcess(dataList);
    const FinalData = {...graphs, mainForcast: mainForcast, daysForcast: daysForcast, fullGraph:{...graphsAllDays}};
    //console.log('**********************',FinalData);
    return FinalData;

};

//Graph Data Pocessors
const processDataForGraphs = (dataArray) => {
    //This will Contains the Data For Temerature Graph
    const temperatureGraph = [];
    dataArray.map((list) => {
        //Data For Temperature Graph
        temperatureGraph.push(
            {
                date: list.dt_txt,
                hour: getHourFromDate(list.dt_txt),
                temperature: list.main.temp,
                tempK: list.main.temp,
                tempC: convertTemp(list.main.temp,'C'),
                tempF: convertTemp(list.main.temp,'F')

            }
        );
        return false;
    });
       return {
           temperatureGraph: temperatureGraph
       }
};

//Mapped values for main forcast
const mainForcastDataMapper = (data) =>{
    return {
        temperature:data.main.temp,
        weather: data.weather[0].description,
        icon: WEATHER_ICON.replace('{icon-id}', data.weather[0].icon),
        date: data.dt_txt,
        forcastDataAll: data
    };
};

/*
 * Data Processers for Days
 */
const ForcastDaysProcess = (DataList)=> {
    const InfoByDate = [];
    const groupsByDate = _.groupBy(DataList, function (item) {
        return moment(item.dt_txt).startOf('day').format();
    });
    _.forEach(groupsByDate, function(value, key) {
        let dataObj = {dateAveraged: key, ...filterTempratures(value)};

        InfoByDate.push(dataObj)
    });

    //console.log('GroupDataByDate',groupsByDate, 'Filterdata',InfoByDate);
    return InfoByDate;
};

// Processing Temprature and Other data For Display in the date components
const filterTempratures = (dataArray)=>{

    const minTemp=[];
    const maxTemp=[];
    const temp=[];
    const weatherInfo={main:[], description:[],icon:[],weatherTypes:[]};
    const dateList = [];

    dataArray.map( ({main,weather,dt_txt}) => {

        minTemp.push(main.temp_min);
        maxTemp.push(main.temp_max);
        temp.push(main.temp);

        weatherInfo.main.push(weather[0].main);
        weatherInfo.description.push(weather[0].description);
        weatherInfo.icon.push(getIconUrl(weather[0].icon));
        weatherInfo.weatherTypes.push(weather[0].description,weather[0].main);


        dateList.push(dt_txt);

        return false;
    });

    return {minTemp:_.min(minTemp), maxTemp:_.max(maxTemp), temp: temp, weatherInfo: weatherInfo, date: dateList[Math.floor(dateList.length/2)]}

};