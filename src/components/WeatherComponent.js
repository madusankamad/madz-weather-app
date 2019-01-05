import React, {Component} from 'react';
import {ForcastMain} from './ForcastMainComponent/ForcastMain';
import DataRangeSelector from './FilterComponents/DataRangeSelector';
import GraphSwitcher from './GraphComponents/GraphSwitcher';
import {DayListComponent} from "./DayForcastComponenets/DayListComponent";
import {Container, Grid, Button} from 'semantic-ui-react';
import {CITY_DATA, TEMP_UNITS, WEATHER_TYPES} from '../Const/CONSTANTS';
import {getFormattedDate} from '../helpers/helperUtils';
import {convertTemp} from '../helpers/helperUtils';
import SummaryComponent  from '../components/SummaryComponent/SummaryComponent';
import GraphFilter from '../components/FilterComponents/GraphFilters';



export class WeatherComponent extends Component {

    changeDate = (date) => {
        const options = [...this.props.weatherInfo.list];
        this.props.changeDateAndList(date, options);
    };

    changeTemperatureUnit = (value) => {
        this.setState({
            tempUnit: value
        });
    };
    fetchNewData = () => {
        this.props.fetchWeatherInformationById(this.props.selectedCityId, this.props.selectedTime);
    };

    constructor() {
        super();
        this.state = {
            tempUnit: TEMP_UNITS.other.farenheit
        };
    }

    componentDidMount() {
        this.fetchNewData();
    }

    render() {
        const {tempUnit} = this.state;
        const {weatherInfo, graphs, mainForcast, daysForcast, selectedWeatherType,dataRangeSelector,selectedGraphType} = this.props;

        return (
            <Grid.Column className="weather-container">
                <Grid.Row>
                    <Grid>
                        <Grid.Column floated="left" width={6}>
                            <ForcastMain
                                city={weatherInfo.city ? weatherInfo.city.name : ''}
                                date={mainForcast.date ? getFormattedDate(mainForcast.date, "dddd h a") : ''}
                                icon={mainForcast.icon ? mainForcast.icon : ''}
                                temperature={mainForcast.temperature ? convertTemp(mainForcast.temperature, tempUnit) : ''}
                                weatherType={mainForcast.weather ? mainForcast.weather : ''}
                                options={{
                                    activeUnit: this.state.tempUnit,
                                    toggleUnits: [TEMP_UNITS.other.celcius, TEMP_UNITS.other.farenheit],
                                    changeHandler: this.changeTemperatureUnit
                                }
                                }
                            />
                        </Grid.Column>
                        <Grid.Column floated="right" width={8}>
                            <SummaryComponent/>
                            <GraphFilter/>
                        </Grid.Column>

                    </Grid>
                </Grid.Row>
                <Grid.Row style={{marginTop:15}}>
                    <Grid>
                    <Grid.Column floated="right" width={6}><DataRangeSelector/></Grid.Column>
                    </Grid>

                    <GraphSwitcher options={{tempUnit:tempUnit, changeDate: this.changeDate}}/>

                </Grid.Row>
                <Grid.Row>

                    <DayListComponent options={
                        {
                            selectedWeatherType: selectedWeatherType,
                            dataSet: daysForcast ? daysForcast : [],
                            tempUnit: tempUnit,
                            changeDateHandler: this.changeDate
                        }}/>
                </Grid.Row>

            </Grid.Column>
        );
    }
}