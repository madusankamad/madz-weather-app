import React, {Component} from "react";
import PropTypes from "prop-types";
import {ForcastMain} from "./ForcastMainComponent/ForcastMain";
import DataRangeSelector from "./FilterComponents/DataRangeSelector";
import GraphSwitcher from "./GraphComponents/GraphSwitcher";
import {DayListComponent} from "./DayForcastComponenets/DayListComponent";
import {Grid} from "semantic-ui-react";
import {UNIT_TYPES} from "../Const/CONSTANTS";
import {convertTemp, getFormattedDate} from "../helpers/helperUtils";
import SummaryComponent from "../components/SummaryComponent/SummaryComponent";
import GraphFilter from "../components/FilterComponents/GraphFilters";
import {AppLoader} from "./CommonComponents/Loader";


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
            tempUnit: UNIT_TYPES.temperature.other.farenheit
        };
    }

    componentDidMount() {
        this.fetchNewData();
    }

    render() {
        const {tempUnit} = this.state;
        const {weatherInfo, mainForcast, daysForcast, selectedWeatherType} = this.props;

        return (
            <Grid.Column className="weather-container">
                <AppLoader showLoading={mainForcast.dataLoaded}/>
                <Grid.Row>
                    <Grid>
                        <Grid.Column floated="left" width={6}>
                            <ForcastMain
                                city={weatherInfo.city ? weatherInfo.city.name : ''}
                                date={mainForcast.date ? getFormattedDate(mainForcast.date, "dddd h a") : ''}
                                icon={mainForcast.icon ? mainForcast.icon : ''}
                                temperature={mainForcast.temperature ? convertTemp(mainForcast.temperature, tempUnit) : 0}
                                weatherType={mainForcast.weather ? mainForcast.weather : ''}
                                options={{
                                    activeUnit: this.state.tempUnit,
                                    toggleUnits: [UNIT_TYPES.temperature.other.celcius, UNIT_TYPES.temperature.other.farenheit],
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
                <Grid.Row style={{marginTop: 15}}>
                    <Grid>
                        <Grid.Column floated="right" width={6}><DataRangeSelector/></Grid.Column>
                    </Grid>

                    <GraphSwitcher options={{tempUnit: tempUnit, changeDate: this.changeDate}}/>

                </Grid.Row>
                <Grid.Row>

                    {<DayListComponent options={
                        {
                            selectedWeatherType: selectedWeatherType,
                            dataSet: daysForcast ? daysForcast : [],
                            tempUnit: tempUnit,
                            changeDateHandler: this.changeDate
                        }}/>}
                </Grid.Row>
            </Grid.Column>
        );
    }
}

WeatherComponent.propTypes = {
    weatherInfo: PropTypes.object.isRequired,
    mainForcast: PropTypes.object.isRequired,
    daysForcast: PropTypes.array.isRequired,
    selectedWeatherType: PropTypes.string.isRequired,

};
