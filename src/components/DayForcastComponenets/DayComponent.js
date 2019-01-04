import React from 'react';
import {Image} from 'semantic-ui-react';
import {Digree} from "../CommonComponents/Degree";
import PropTypes from "prop-types";

export const DayComponent = (props) => {
    const {day, icon, minTemp, maxTemp, changeDateHandler,fullDate,tempUnit,activeState} = props;


    return (
        <div className={activeState ?'day-container active': 'day-container inactive' } onClick={activeState? ()=>changeDateHandler(fullDate):null}>
            <div className="day">
                <div>{day}</div>
            </div>
            <div className="icon">
                <div><Image src={icon}/></div>
            </div>
            <div className="temp">
                <div>{<Digree value={minTemp} unit={tempUnit} position={'right'}/>} | {<Digree value={maxTemp} unit={tempUnit} position={'right'}/>}</div>
            </div>
        </div>
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