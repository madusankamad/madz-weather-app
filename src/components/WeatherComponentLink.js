import {connect} from "react-redux";
import {WeatherComponent} from "./WeatherComponent";
import {getCityWeather} from "../_thunks/weatherApiThunks";
import {changeCitySuccess, changeDateSuccess, changeWeatherTypeSuccess} from "../_actions/filterActions";
import {newDataFetchSuccess} from "../_actions/commonActions";


const mapStateToProps = (state, props) => {
    return {
        weatherInfo: state.weatherInfo,
        graphs: state.graphs,
        mainForcast: state.mainForcast,
        daysForcast: state.daysForcast,
        selectedTime: state.filters.selectedDate,
        selectedWeatherType: state.filters.selectedWeatherType,
        selectedCityId: state.filters.selectedCityId,
        dataRangeSelector: state.filters.forcastDataRange,
        selectedGraphType: state.filters.selectedGraphType
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchWeatherInformationById: (cityId, time) => {
            dispatch(getCityWeather(cityId, time));
        },
        changeDateAndList: (date, options) => {
            dispatch(newDataFetchSuccess(options, date));
            dispatch(changeDateSuccess(date));
        },

        changeCity: (city) => {
            dispatch(changeCitySuccess(city))
        },
        changeWeatherType: (city) => {
            dispatch(changeWeatherTypeSuccess(city))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);