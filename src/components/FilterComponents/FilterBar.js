import {Grid, Select,Container} from "semantic-ui-react";
import {CityList} from "./CityFilter";
import {WEATHER_TYPES} from "../../Const/CONSTANTS";
import React from "react";
import { connect } from 'react-redux';
import {changeCitySuccess, changeWeatherTypeSuccess} from "../../_actions/filterActions";
import {getCityWeather} from "../../_thunks/weatherApiThunks";

const FilterBar = (props) => {

    const {changeCity,changeWeatherType,selectedTime} = props;
    const changeCityHandler = (evt, data)=>{changeCity(data.value,selectedTime)};
    const changeWeatherHandler = (evt, data)=>{changeWeatherType(data.value)};

    return(
    <Grid columns={3}>
        <Grid.Row>
            <Grid.Column>
                <CityList changeHandler={changeCityHandler}/>
            </Grid.Column>
            <Grid.Column>
                <Select onChange={changeWeatherHandler}
                        placeholder='Select Weather Type'
                        options={WEATHER_TYPES.list.map(weatherType => {
                            return {text: weatherType.name, value: weatherType.value}
                        })}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>)};





const mapStateToProps = (state,props) => {
    return{
        selectedTime: state.filters.selectedDate,
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