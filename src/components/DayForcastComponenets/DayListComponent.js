import React from "react";
import {DayComponent} from "./DayComponent";
import {Container, Grid} from "semantic-ui-react";
import {convertTemp, getDayNameFromDate} from "../../helpers/helperUtils";
import _ from "lodash";

export const DayListComponent = (props) => {
    const {dataSet, tempUnit, changeDateHandler, selectedWeatherType} = props.options;
    const columnCount = dataSet.length && dataSet.length > 0 ? dataSet.length : 6;

    return (<Container className="day-list-component">
            <Grid.Row>
                <Grid columns={columnCount}>
                    {dataSet.length > 0 && dataSet.map((data, index) => {
                            const indexSel = _.findIndex(data.weatherInfo.weatherTypes, (val) => val.toLowerCase() === selectedWeatherType.toLowerCase());
                            const isActive = selectedWeatherType.toLowerCase() === 'none' || (indexSel && indexSel > -1);
                            const Date = getDayNameFromDate(data.date);

                            return (
                                <Grid.Column key={index}>
                                    <DayComponent
                                        activeState={isActive}
                                        key={index}
                                        day={Date}
                                        fullDate={data.date ? data.date : ''}
                                        tempUnit={tempUnit}
                                        icon={data.weatherInfo.icon[0]}
                                        minTemp={convertTemp(data.minTemp, tempUnit)}
                                        maxTemp={convertTemp(data.maxTemp, tempUnit)}
                                        changeDateHandler={changeDateHandler}
                                    />
                                </Grid.Column>
                            )
                        }
                    )}
                </Grid>
            </Grid.Row>
        </Container>
    )
};

DayListComponent.defaultProps = {
    options: {}
};