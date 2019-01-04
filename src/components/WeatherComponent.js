import React, {Component} from 'react';
import {ForcastMain} from './ForcastMainComponent/ForcastMain';
import {TemperatureGraph} from './GraphComponents/TemperatureGraph';
import {DayListComponent} from "./DayForcastComponenets/DayListComponent";
import {Container, Grid, Select} from 'semantic-ui-react';
import {CityList} from '../components/FilterComponents/CityFilter';
import {CITY_DATA, TEMP_UNITS, WEATHER_TYPES} from '../Const/CONSTANTS';
import {getFormattedDate} from '../helpers/helperUtils';
import {convertTemp} from '../helpers/helperUtils';


export class WeatherComponent extends Component {

    changeDateHandler = (evt, data) => {
        this.changeDate(data.value);

    };
    changeDate = (date) => {
        const options = [...this.props.weatherInfo.list];
        this.props.changeDate(date, options);
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
    };
    fetchNewData = (cityId) => {
        this.props.fetchWeatherInformationById(cityId,this.state.selectedTime);

    };

    constructor() {
        super();

        this.state = {
            selectedTime: getFormattedDate((new Date()),'YYYY-MM-DD h:m:s'),
            tempUnit: TEMP_UNITS.other.farenheit,
            selectedCityId: CITY_DATA[0].id,
            selectedWeatherType: WEATHER_TYPES.default.value,
        };
    }

    componentDidMount() {
       /*
       * Do the inital Data Call
        */
        this.fetchNewData(this.state.selectedCityId);

    }

    render() {
        const {tempUnit} = this.state;
        const{weatherInfo,graphs,mainForcast,daysForcast} = this.props;
        //const tempGraphData = graphs.temperatureGraph.map(temp=>)

        return (<Container>
            <Grid columns={3}>
                <Grid.Row>
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
                        city={weatherInfo.city?weatherInfo.city.name:''}
                        date={mainForcast.date?getFormattedDate(mainForcast.date, "dddd h a"):''}
                        icon={mainForcast.icon?mainForcast.icon:''}
                        temperature={mainForcast.temperature?convertTemp(mainForcast.temperature,tempUnit):''}
                        weatherType={mainForcast.weather?mainForcast.weather:''}
                        options={{
                            activeUnit: this.state.tempUnit,
                            toggleUnits: [TEMP_UNITS.other.celcius, TEMP_UNITS.other.farenheit],
                            changeHandler: this.changeTempratureUnit
                        }
                        }
                    />
                </Grid.Row>
                <Grid.Row>
                    {graphs.temperatureGraph && <TemperatureGraph tempUnit={tempUnit} data={graphs.temperatureGraph} dotClick={this.changeDate}/>}
                </Grid.Row>
                <Grid.Row>
                    <DayListComponent options={
                        {
                            selectedWeatherType: this.state.selectedWeatherType,
                            dataSet: daysForcast?daysForcast:[],
                            tempUnit: tempUnit,
                            changeDateHandler: this.changeDate
                        }}/>
                </Grid.Row>

            </Grid>
        </Container>);
    }
}