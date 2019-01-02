import React, {Component} from 'react';
import {getWeatherInfoByCityId} from '../api/weatherApi';
import {ForcastMain} from './ForcastMainComponent/ForcastMain';
import {TemperatureComponent} from './TemperatureGraphComponents/TemperatureComponent';
import {DayListComponent} from "./DayForcastComponenets/DayListComponent";
import {getDateList, getForcastDataByTime} from "../selectors/forcastSelector";
import {Container, Grid, Select} from 'semantic-ui-react';
import {CityList} from '../components/FilterComponents/CityFilter';


export class WeatherContainer extends Component {
    changeDateHandler = (evt, data) => {
        console.log(data.value);
        this.setState({
            selectedTime: data.value,
            selectedResult: getForcastDataByTime(this.state.allForcastResult, data.value)
        })
    };

    constructor() {
        super();

        this.state = {
            selectedResult: {},
            selectedTime: '2019-01-04 12:00:00',
            dateList: [],
            allForcastResult: {},
            measurementUnit: 'F'
        };
    }

    componentDidMount() {
        console.log('Call Initial Data Call');
        getWeatherInfoByCityId().then(response => {
            //this.setState({allResult: response.data});
            const selectedResult = getForcastDataByTime(response.data, this.state.selectedTime);
            const dateList = getDateList(response.data);
            console.log(selectedResult);

            this.setState({allForcastResult: response.data, selectedResult: selectedResult, dateList: dateList});
        })
    }

    render() {
        const {city, date, icon, temperature, weather} = this.state.selectedResult;
        const {measurementUnit} = this.state;

        return (<Container className="weather-container">
            <Grid>
                <Grid.Row>
                    <ForcastMain city={city}
                                 date={date}
                                 icon={icon}
                                 temperature={temperature}
                                 mUnit = {measurementUnit}
                                 weatherType={weather}/>
                </Grid.Row>

                <Grid.Row>
                    <TemperatureComponent/>
                </Grid.Row>
                <Grid.Row>
                    <DayListComponent/>
                </Grid.Row>

            </Grid>
            <Select onChange={this.changeDateHandler} placeholder='Select Date'
                    options={this.state.dateList.map(date => {
                        return {text: date, value: date}
                    })}/>

            <CityList/>


        </Container>);
    }
}