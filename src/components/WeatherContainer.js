import React, {Component} from 'react';
import {getWeatherInfoByCityId} from '../api/weatherApi';
import {ForcastMain} from './ForcastMainComponent/ForcastMain';
import {TemperatureGraph} from './GraphComponents/TemperatureGraph';
import {DayListComponent} from "./DayForcastComponenets/DayListComponent";
import {getGraphAndFilterDataByDate} from "../selectors/forcastSelector";
import {Container, Grid, Select} from 'semantic-ui-react';
import {CityList} from '../components/FilterComponents/CityFilter';
import {CITY_DATA, TEMP_UNITS, WEATHER_TYPES} from '../Const/CONSTANTS';
import {getFormattedDate} from '../helpers/helperUtils';


export class WeatherContainer extends Component {
    changeDateHandler = (evt, data) => {
        this.changeDate(data.value);

    };
    changeDate = (date) => {
        console.log(date);
        this.setState({
            selectedTime: date
        });
        this.updateGraphs(this.state.allForcastResult, date, this.state.tempUnit);

    };
    changeWeatherHandler = (evt, data) => {
        console.log('weather',data.value);
        this.changeWeather(data.value);

    };
    changeWeather=(value)=>{
        this.setState({selectedWeatherType:value})
    };
    changeCityHandler = (evt, data) => {
        this.fetchNewData(data.value)
    };
    changeTempratureUnit = (value) => {
        this.setState({
            tempUnit: value
        });
        this.updateGraphs(this.state.allForcastResult, this.state.selectedTime, value);

    };
    fetchNewData = (cityId) => {
        getWeatherInfoByCityId(cityId).then(response => {
            //this.setState({allResult: response.data});
            //const mainForcastData = getForcastDataByTime(response.data, this.state.selectedTime);
            const {dateList} = getGraphAndFilterDataByDate(response.data, this.state.tempUnit, this.state.selectedTime).allDaysGraph;
            this.updateGraphs(response.data, this.state.selectedTime, this.state.tempUnit);
            this.setState({
                allForcastResult: response.data,
                dateList: dateList
            });
        })
    };
    updateGraphs = (forcastDataAll, time, tempUnit) => {
        const FilterAndGraphData = getGraphAndFilterDataByDate(forcastDataAll, tempUnit, time);
        const mainForcastData = FilterAndGraphData.mainForcastData;
        const {tempGraphDataList} = FilterAndGraphData.selectedGraph;
        const {groupedForcastResult} = FilterAndGraphData

        this.setState({
            mainForcastData: mainForcastData,
            graphData: {...this.state.graphData, temperatureGraphData: tempGraphDataList},
            groupedForcastResult: groupedForcastResult
        });
    };

    constructor() {
        super();

        this.state = {
            mainForcastData: {},
            selectedTime: '2019-01-04 12:00:00',
            dateList: [],
            allForcastResult: {},
            tempUnit: TEMP_UNITS.other.farenheit,
            selectedCityId: CITY_DATA[0].id,
            selectedWeatherType: WEATHER_TYPES.default.value,
            graphData: {
                temperatureGraphData: []
            },
            groupedForcastResult: []
        };
    }

    componentDidMount() {
        console.log('Call Initial Data Call');
        this.fetchNewData(this.state.selectedCityId);
    }

    render() {
        const {city, date, icon, temperature, weather} = this.state.mainForcastData;
        const {tempUnit, groupedForcastResult} = this.state;
        const {temperatureGraphData} = this.state.graphData;

        return (<Container>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Select onChange={this.changeDateHandler}
                                placeholder='Select Date'
                                options={this.state.dateList.map(date => {
                                    return {text: date, value: date}
                                })}/>
                    </Grid.Column>
                    <Grid.Column>
                        <CityList changeHandler={this.changeCityHandler}/>
                    </Grid.Column>
                    <Grid.Column>

                        <Select onChange={this.changeWeatherHandler}
                                placeholder='Select Weather Type'
                                options={WEATHER_TYPES.list.map(weatherType => {
                                    return {text: weatherType.name, value: weatherType.value}
                                })}/>
                    </Grid.Column>


                </Grid.Row>
            </Grid>
            <Grid className="weather-container">
                <Grid.Row>
                    <ForcastMain
                        city={city}
                        date={getFormattedDate(date, "dddd h a")}
                        icon={icon}
                        temperature={temperature}
                        mUnit={tempUnit}
                        weatherType={weather}
                        options={{
                            activeUnit: this.state.tempUnit,
                            toggleUnits: [TEMP_UNITS.other.celcius, TEMP_UNITS.other.farenheit],
                            changeHandler: this.changeTempratureUnit
                        }
                        }
                    />
                </Grid.Row>
                <Grid.Row>
                    <TemperatureGraph data={temperatureGraphData} dotClick={this.changeDate}/>
                </Grid.Row>
                <Grid.Row>
                    <DayListComponent options={
                        {
                            selectedWeatherType: this.state.selectedWeatherType,
                            dataSet: groupedForcastResult,
                            tempUnit: tempUnit,
                            changeDateHandler: this.changeDate

                        }}/>
                </Grid.Row>

            </Grid>
        </Container>);
    }
}