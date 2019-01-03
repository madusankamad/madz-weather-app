import React from 'react';
import {Image, Grid} from 'semantic-ui-react'

export const DayComponent = (props) => {
    const {day, icon, minTemp, maxTemp, onClickHandler} = props;

    return (
        <div className='day-container' onClick={onClickHandler}>
            <div className="day">
                <div>{day}</div>
            </div>
            <div className="icon">
                <div><Image src={icon}/></div>
            </div>
            <div className="temp">
                <div>{minTemp} | {maxTemp}</div>
            </div>
        </div>
    );
};