import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import convert from 'convert-units';

export const ForcastMain = (props) => {
    const {city,date,weatherType,icon,temperature,mUnit} = props;
    const convertedTemprature = temperature? Math.floor(convert(temperature).from('K').to(mUnit)):'';
    return (<div className="main-forcast">
        <div className="city-title">{city}</div>
        <div className="date-box">{date}</div>
        <div className="weather-type-box">{weatherType}</div>
        <div className='temp-row'>
            <div className="weather-icon"><Image src={icon} size='small'/></div>
            <div className="temp-box"><h1>{convertedTemprature}</h1></div>
            <div className="temp-unit"><span>C</span> | <span>F</span></div>
        </div>
    </div>)
};

ForcastMain.propTypes ={
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    weatherType: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
};