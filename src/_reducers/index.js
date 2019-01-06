import {combineReducers} from "redux";
import {graphReducer} from "./graphReducer";
import {weatherReducer} from "./weatherInfoReducer";
import {filterReducer} from "./filterReducer";
import {mainForcastReducer} from "./mainForcastReducer";
import {daysForcast} from "./daysForcastReducer";


const rootReducer = combineReducers({

    weatherInfo: weatherReducer,
    graphs: graphReducer,
    filters: filterReducer,
    mainForcast: mainForcastReducer,
    daysForcast: daysForcast
});

export default rootReducer;