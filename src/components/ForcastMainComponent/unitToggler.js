import React from 'react';

export const UnitToggler = (props) => {
    const {activeUnit, toggleUnits, changeHandler} = props;

console.log(props);
    return (<div className='unit-toggler'>{toggleUnits.map((unit,index) => {
        return (activeUnit === unit) ? <div key={index} className="active">{unit}</div> : <div key={index} onClick={(evt)=>{evt.preventDefault();changeHandler(unit); return false}}>{unit}</div>
    })}</div>)
};

UnitToggler.defaultProps ={
    activeUnit: '',
    toggleUnits: [],
    changeHandler: ()=>{return false}

};