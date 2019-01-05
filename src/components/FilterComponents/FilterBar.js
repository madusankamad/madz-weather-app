import {Grid, Select,Dropdown} from "semantic-ui-react";
import {CITY_DATA, WEATHER_TYPES} from "../../Const/CONSTANTS";
import React from "react";
import { connect } from 'react-redux';
import {changeCitySuccess, changeWeatherTypeSuccess} from "../../_actions/filterActions";
import {getCityWeather} from "../../_thunks/weatherApiThunks";

const FilterBar = (props) => {

    const {changeCity,changeWeatherType,selectedTime,selectedWeatherType,selectedCityId} = props;
    const changeCityHandler = (evt, data)=>{changeCity(data.value,selectedTime)};
    const changeWeatherHandler = (evt, data)=>{changeWeatherType(data.value)};

    return(
    <Grid columns={3}>
            <Grid.Column>
                <h3>Filters</h3>
            </Grid.Column >
            <Grid.Column>
                <Dropdown onChange={changeCityHandler} placeholder='Select City' fluid search selection
                          labeled={true}
                        options={CITY_DATA.map(city => {
                            return {text: city.name, value: city.id}
                        })}/>
            </Grid.Column>
            <Grid.Column>
                <Dropdown onChange={changeWeatherHandler}
                          labeled={true}
                        placeholder='Select Weather Type' fluid search selection
                        options={WEATHER_TYPES.list.map(weatherType => {
                            return {text: weatherType.name, value: weatherType.value}
                        })}/>
            </Grid.Column>
    </Grid>)};





const mapStateToProps = (state,props) => {
    return{
        selectedTime: state.filters.selectedDate,
        selectedCityId: state.filters.selectedCityId,
        selectedWeatherType: state.filters.selectedWeatherType

    }
};


const mapDispatchToProps = dispatch => {
    return{
        changeCity: (city,time) => {
            dispatch(changeCitySuccess(city));
            dispatch(getCityWeather(city,time));
        },
        changeWeatherType: (city) => {
            dispatch(changeWeatherTypeSuccess(city))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);