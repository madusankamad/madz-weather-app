import React from 'react';
import PropTypes from "prop-types";
import {Digree} from "../CommonComponents/Degree";

const ActiveComponent = ({unit})=> (<div className="active"><Digree value={unit} unit={unit}/></div>);
const InactiveComponent = ({unit,changeHandler})=> (<div onClick={()=>{changeHandler(unit); return false}}><Digree value={unit} unit={unit}/></div>);

export const UnitToggler = (props) => {
    const {activeUnit, toggleUnits, changeHandler} = props;

console.log(props);
    return (<div className='unit-toggler'>{
        toggleUnits.map((unit,index) => (activeUnit === unit) ? <ActiveComponent unit={unit} key={index}/> : <InactiveComponent unit={unit} changeHandler={changeHandler} key={index}/>)}</div>)
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