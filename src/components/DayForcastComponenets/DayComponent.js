import React from 'react';
import {Image} from 'semantic-ui-react';
import {Digree} from "../CommonComponents/Degree";
import {Container,Grid} from 'semantic-ui-react';
import PropTypes from "prop-types";

export const DayComponent = (props) => {
    const {day, icon, minTemp, maxTemp, changeDateHandler,fullDate,tempUnit,activeState} = props;


    return (
        <Container className={activeState ?'day-container active': 'day-container inactive' } onClick={activeState? ()=>changeDateHandler(fullDate):null}>
            <Grid.Row className="day">
                <div>{day}</div>
            </Grid.Row>
            <Grid.Row className="icon">
                <div><Image src={icon}/></div>
            </Grid.Row>
            <Grid.Row className="temp">
                <Grid.Column>{<Digree value={minTemp} unit={tempUnit} position={'right'}/>} | {<Digree value={maxTemp} unit={tempUnit} position={'right'}/>}</Grid.Column>
            </Grid.Row>
        </Container>
    );
};

Digree.propTypes ={
    activeState: PropTypes.bool.isRequired,
    day: PropTypes.string.isRequired,
    fullDate: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    changeDateHandler: PropTypes.func.isRequired

};