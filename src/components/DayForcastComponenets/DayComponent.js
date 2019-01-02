import React from 'react';
import { Image } from 'semantic-ui-react'

export const DayComponent = (props) => {
    const {day,icon,temperature,onClickHandler} = props;

    return(<div className='day-container' onClick={onClickHandler}>
        <div className="day">{day}</div>
        <div className="icon"><Image src={icon} size='small'/></div>
        <div className="temp" >{temperature}</div>
    </div>);
};