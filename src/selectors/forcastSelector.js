import _ from 'lodash';
import {WEATHER_ICON} from '../Const/CONSTANTS';
import {TempUnits} from '../Const/CONSTANTS';
import {convertTemp, getHourFromDate, getDayFromDate,getIconUrl} from '../helpers/helperUtils';


import moment from 'moment';

export const getGraphAndFilterDataByDate = (forcastData, tempUnit = TempUnits.other.celcius, dateSelected) => {

    const filteredListByDay = (_.filter(forcastData.list, (list) => getDayFromDate(list.dt_txt) === getDayFromDate(dateSelected)));
    GroupedForcastDataFromDate(forcastData);
    return {
        allDaysGraph: filterGraphData(forcastData.list, tempUnit),
        selectedGraph: filterGraphData(filteredListByDay, tempUnit),
        mainForcastData: mainForcastMapper(forcastData, dateSelected, tempUnit),
        groupedForcastResult: GroupedForcastDataFromDate(forcastData,tempUnit)

    };

};

const filterGraphData = (dataList, tempUnit) => {
    const allDates = [];
    const dateAndTemprature = {};
    const tempGraphDataList = [];


    dataList.map((list) => {
        //List of Dates
        allDates.push(list.dt_txt);
        //Date and Temprature List date as a Key
        dateAndTemprature[list.dt_txt] = {
            temperature: list.main.temp
        };
        //Data For Temperature Graph
        tempGraphDataList.push(
            {
                date: list.dt_txt,
                hour: getHourFromDate(list.dt_txt),
                temperature: convertTemp(list.main.temp, tempUnit)
            }
        );
        return false;
    });

    const finalList = {dateList: allDates, dateAndTemperature: dateAndTemprature, tempGraphDataList: tempGraphDataList};

    console.log(finalList);

    return finalList;
};

const mainForcastMapper = (forcastData, timeSelected, tempUnit = TempUnits.other.celcius) => {
    //Filter the data which is equal to given time
    const selectedInfo = (_.filter(forcastData.list, {'dt_txt': timeSelected}))[0];

    return {
        city: forcastData.city.name,
        date: timeSelected,
        temperature: convertTemp(selectedInfo.main.temp, tempUnit),
        weather: selectedInfo.weather[0].description,
        icon: WEATHER_ICON.replace('{icon-id}', selectedInfo.weather[0].icon),
        SelectedforcastInfo: selectedInfo
    };


};

const GroupedForcastDataFromDate = (forcastData)=> {
    const InfoByDate = [];
    const groupsByDate = _.groupBy(forcastData.list, function (item) {
        return moment(item.dt_txt).startOf('day').format();
    });
    _.forEach(groupsByDate, function(value, key) {
        let dataObj = {date: key, ...filterTempratures(value)};

        InfoByDate.push(dataObj)
    });



    console.log('GroupDataByDate',groupsByDate, 'Filterdata',InfoByDate);
    return InfoByDate;
};

const filterTempratures = (dataArray)=>{

        const minTemp=[];
        const maxTemp=[];
        const temp=[];
        const weatherInfo={main:[], description:[],icon:[]};

    dataArray.map( ({main,weather}) => {

        minTemp.push(main.temp_min);
        maxTemp.push(main.temp_max);
        temp.push(main.temp);

        weatherInfo.main.push(weather[0].main);
        weatherInfo.description.push(weather[0].description);
        weatherInfo.icon.push(getIconUrl(weather[0].icon));

        return false;
    });

    return {minTemp:_.min(minTemp), maxTemp:_.max(maxTemp), temp: temp, weatherInfo: weatherInfo}

};



