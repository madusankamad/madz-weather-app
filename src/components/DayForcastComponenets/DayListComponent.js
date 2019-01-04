import React from 'react';
import {DayComponent} from "./DayComponent";
import { Grid} from 'semantic-ui-react';
import {convertTemp, getDayNameFromDate} from '../../helpers/helperUtils';
import _ from 'lodash';

export const DayListComponent = (props) => {
    const {dataSet, tempUnit,changeDateHandler,selectedWeatherType} = props.options;


    return (<Grid columns={dataSet.length > 0 ? dataSet.length : 1} className="day-list-component">
            <div>

                {dataSet.map((data, index) => {
                    const indexSel =_.findIndex(data.weatherInfo.weatherTypes, (val) => val.toLowerCase() == selectedWeatherType.toLowerCase());

                    const isActive =selectedWeatherType.toLowerCase() =='none'|| indexSel >-1;
                    console.log(selectedWeatherType, data.weatherInfo.weatherTypes,isActive,indexSel);
                        return (


                                <DayComponent
                                    activeState={isActive}
                                    key={index}
                                    day={getDayNameFromDate(data.date)}
                                    fullDate={data.date}
                                    tempUnit={tempUnit}
                                    icon={data.weatherInfo.icon[0]}
                                    minTemp={convertTemp(data.minTemp,tempUnit)}
                                    maxTemp={convertTemp(data.maxTemp,tempUnit)}
                                    changeDateHandler={changeDateHandler}
                                />

                        )
                    }
                )}
            </div>
        </Grid>
    )
};

DayListComponent.defaultProps = {
    options: {}
};