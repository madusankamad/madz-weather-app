import { connect } from 'react-redux';
import {WeatherComponent} from './WeatherComponent';
import {getCityWeather} from '../_thunks/weatherApiThunks';
import {changeDateSuccess} from '../_actions/filterActions';
import {changeTempGraphUnit} from '../_actions/graphActions';
import {newDataFetchSuccess} from '../_actions/commonActions';


const mapStateToProps = (state,props) => {
    return{
        weatherInfo: state.weatherInfo,
        graphs: state.graphs,
        mainForcast: state.mainForcast,
        daysForcast: state.daysForcast
    }
};
const mapDispatchToProps = dispatch => {
    return{
        fetchWeatherInformationById : (cityId,time) => {
            dispatch(getCityWeather(cityId,time));
        },
        changeDate : (date,options) => {
            dispatch(newDataFetchSuccess(options,date));
            dispatch(changeDateSuccess(date));
        },
        changeTempUnit: (unit) => {
            dispatch(changeTempGraphUnit(unit))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);