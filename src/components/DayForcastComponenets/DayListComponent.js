import React from 'react';
import {DayComponent} from "./DayComponent";
import {Container, Grid, Select} from 'semantic-ui-react';
import {convertTemp, getDayNameFromDate} from '../../helpers/helperUtils'

export const DayListComponent = (props) => {
    const {dataSet, tempUnit} = props;

    return (<Grid columns={dataSet.length > 0 ? dataSet.length : 1} className="day-list-component">
            <div>

                {dataSet.map((data, index) => {
                        console.log(data);
                        return (


                                <DayComponent
                                    day={getDayNameFromDate(data.date)}
                                    icon={data.weatherInfo.icon[0]}
                                    minTemp={convertTemp(data.minTemp,tempUnit)}
                                    maxTemp={convertTemp(data.maxTemp,tempUnit)}
                                />

                        )
                    }
                )}
            </div>
        </Grid>
    )
};

DayListComponent.defaultProps = {
    dataSet: []
};