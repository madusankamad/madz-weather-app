import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from "prop-types";


const ICONMAP = {
    C:{
        htmlTag:['&#176;','&deg;'],
        name:'celsius',
        value: 'C'
    },
    F:{
        htmlTag:['&#176;','&deg;'],
        name:'farenheit',
        value: 'F'
    }
};

export const Digree = (props) => {
    const {value,unit,position} = props;
    const RenderValue = position === 'right' ? value+ICONMAP[unit].htmlTag[0]:ICONMAP[unit].htmlTag[0]+value;
    return(<span>{ReactHtmlParser(RenderValue)}</span>);
};

Digree.propTypes ={
    value: PropTypes.string,
    unit: PropTypes.string,
    position: PropTypes.string,

};
Digree.defaultProps = {
    value:'',
    unit:'C',
    position:'left'
};