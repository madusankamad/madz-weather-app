import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import {UnitToggler} from './UnitToggler';
import {Container, Grid, Select} from 'semantic-ui-react';


export const ForcastMain = (props) => {
    const {city,date,weatherType,icon,temperature,options} = props;

    return (
        <Container style={{width:200, marginLeft:0}}  className="main-forcast">
        <Grid.Row >
        <div className="city-title">{city}</div>
        <div className="date-box">{date}</div>
        <div className="weather-type-box">{weatherType}</div>
        </Grid.Row>
        <Grid.Row className='temp-row'>
            <Grid.Column className="weather-icon">
                <Image src={icon} size='small'/>
            </Grid.Column>

            <Grid.Column className="temp-box">
                <h1>{temperature}</h1>
            </Grid.Column>
            <Grid.Column className="temp-unit">
                <UnitToggler {...options} />
            </Grid.Column>
        </Grid.Row>
        </Container>
           )
};

ForcastMain.propTypes ={
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    weatherType: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    options: PropTypes.object
};
ForcastMain.defaultProps ={
    city: '',
    date: '',
    weatherType: '',
    icon: '',
    temperature: 0,
    options: {}
};