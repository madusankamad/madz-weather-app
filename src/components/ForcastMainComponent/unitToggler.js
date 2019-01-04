import React from 'react';
import PropTypes from "prop-types";
import {Digree} from "../CommonComponents/Degree";


export const UnitToggler = (props) => {
    const {activeUnit, toggleUnits, changeHandler} = props;

console.log(props);
    return (<div className='unit-toggler'>{toggleUnits.map((unit,index) => {
        return (activeUnit === unit) ? <div key={index} className="active"><Digree value={unit} unit={unit}/></div> : <div key={index} onClick={(evt)=>{evt.preventDefault();changeHandler(unit); return false}}><Digree value={unit} unit={unit}/></div>
    })}</div>)
};

UnitToggler.propTypes ={
    activeUnit: PropTypes.string.isRequired,
    toggleUnits: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired,

};

UnitToggler.defaultProps ={
    activeUnit: '',
    toggleUnits: [],
    changeHandler: ()=>{return false}

};