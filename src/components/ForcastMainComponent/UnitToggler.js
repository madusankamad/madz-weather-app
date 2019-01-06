import React from "react";
import PropTypes from "prop-types";
import {Digree} from "../CommonComponents/Degree";

export const UnitToggler = (props) => {
    const {activeUnit, toggleUnits} = props;


    return (<div className='unit-toggler'>{
        toggleUnits.map((unit, index) => {
            const isActive = unit === activeUnit;
            return (
                <div key={index} className={isActive ? 'active' : ''}
                     onClick={(evt) => !isActive ? props.changeHandler(unit) : null}>
                    <Digree value={unit} unit={unit}/>
                </div>
            )
        })
    }
    </div>)
};

UnitToggler.propTypes = {
    activeUnit: PropTypes.string.isRequired,
    toggleUnits: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired,

};

UnitToggler.defaultProps = {
    activeUnit: '',
    toggleUnits: [],
    changeHandler: () => {
        return false
    }

};
